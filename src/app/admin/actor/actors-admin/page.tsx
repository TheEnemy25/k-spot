"use client";

import React, { useState, useEffect } from "react";
import Actor from "../../../../api-client/models/actor-models/Actor";
import ActorService from "../../../../api-client/service/ActorService";
import { FaTrash, FaInfo } from "react-icons/fa6";
import ActionButton from "../../../../components/action-button/ActionButton";
import useSelectableEntities from "../../../../hooks/useSelectableEntities";
import ConfirmDeleteSelectedModal from "../../movie/movies-admin/ConfirmDeleteSelectedModal";
import "./ActorsAdminPage.module.scss";

function ActorsAdminPage() {
    const [actors, setActors] = useState<Actor[]>([]);
    const [showCheckboxes, setShowCheckboxes] = useState(false);

    useEffect(() => {
        const fetchActors = async () => {
            try {
                const actorsData = await ActorService.getActors();
                setActors(actorsData);
            } catch (error) {
                console.error("Error fetching actors:", error);
            }
        };

        fetchActors();
    }, []);

    const {
        selectedEntities,
        handleCheckboxChange,
        handleDeleteSelectedEntities,
        resetSelectedEntities,
        toggleDeleteConfirmation,
        showConfirmDelete,
        entitiesToDelete,
    } = useSelectableEntities(ActorService.deleteActor, actors, setActors);

    const toggleCheckboxes = () => {
        setShowCheckboxes((prev) => {
            if (!prev) {
                resetSelectedEntities();
            }
            return !prev;
        });
    };

    return (
        <>
            <section className="actors-admin">
                <h1 className="actors-admin__title">Actors List</h1>

                <div className="actors-admin__buttons">
                    <ActionButton onClick={toggleCheckboxes} className="actors-admin__select-button">
                        {showCheckboxes ? "Hide Checkboxes" : "Select Actors"}
                    </ActionButton>
                    <ActionButton href="/actor-pages/create/ActorFormPage" className="actors-admin__create-button">
                        Create New Actor
                    </ActionButton>

                    {showCheckboxes && selectedEntities.length > 0 && (
                        <ActionButton
                            onClick={toggleDeleteConfirmation}
                            className="actors-admin__select-delete-button"
                        >
                            Delete Selected Actors
                        </ActionButton>
                    )}
                </div>

                <table className="actors-admin__table">
                    <thead>
                        <tr className="actors-admin__table-row">
                            <th className="actors-admin__table-header">№</th>
                            <th className="actors-admin__table-header">ID</th>
                            <th className="actors-admin__table-header">Name</th>
                            <th className="actors-admin__table-header">Bio</th>
                            <th className="actors-admin__table-header">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {actors.map((actor, index) => (
                            <tr className="actors-admin__table-row" key={actor.id}>
                                <td className="actors-admin__table-cell">
                                    {showCheckboxes && (
                                        <input
                                            type="checkbox"
                                            checked={selectedEntities.includes(actor.id)}
                                            onChange={() => handleCheckboxChange(actor.id)}
                                        />
                                    )}
                                    {!showCheckboxes && index + 1}
                                </td>
                                <td className="actors-admin__table-cell">{actor.id}</td>
                                <td className="actors-admin__table-cell">{actor.fullName}</td>
                                <td className="actors-admin__table-cell">{actor.biography}</td>
                                <td className="actors-admin__table-cell">
                                    <ActionButton
                                        onClick={() => {
                                            handleCheckboxChange(actor.id);
                                            toggleDeleteConfirmation();
                                        }}
                                        className="actors-admin__action-button--delete"
                                    >
                                        <FaTrash />
                                    </ActionButton>

                                    <ActionButton href={`/actor/${actor.id}`} className="actors-admin__action-button--details">
                                        <FaInfo />
                                    </ActionButton>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {showConfirmDelete && (
                    <ConfirmDeleteSelectedModal
                        onClose={resetSelectedEntities}
                        onConfirm={handleDeleteSelectedEntities}
                        count={entitiesToDelete.length}
                    />
                )}
            </section>
        </>
    );
}

export default ActorsAdminPage;
