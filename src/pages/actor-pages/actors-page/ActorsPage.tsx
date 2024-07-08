import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Actor from '../../../api-client/models/actor-models/Actor';
import ActorService from '../../../api-client/service/ActorService';
import './ActorsPage.scss';
import { FaTrash, FaInfo } from 'react-icons/fa6';

function ActorsPage() {
    const [actors, setActors] = useState<Actor[]>([]);
    const [selectedActors, setSelectedActors] = useState<string[]>([]);
    const [showCheckboxes, setShowCheckboxes] = useState(false);
    const [hoveredImageUrl, setHoveredImageUrl] = useState<string>('');

    const navigate = useNavigate();

    const handleActorDetails = (actorId: string) => {
        navigate(`/actor/${actorId}`);
    };

    useEffect(() => {
        async function fetchActors() {
            try {
                const actorsData = await ActorService.getActors();
                setActors(actorsData);
            } catch (error) {
                console.error('Error fetching actors:', error);
            }
        }

        fetchActors();
    }, []);

    const handleDeleteSelectedActors = async () => {
        const confirmed = window.confirm("Are you sure you want to delete selected actors?");
        if (confirmed) {
            try {
                await Promise.all(selectedActors.map(actorId => ActorService.deleteActor(actorId)));
                setActors(prevActors => prevActors.filter(actor => !selectedActors.includes(actor.id)));
                setSelectedActors([]);
            } catch (error) {
                console.error('Error deleting selected actors:', error);
            }
        }
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, actorId: string) => {
        if (event.target.checked) {
            setSelectedActors(prevSelected => [...prevSelected, actorId]);
        } else {
            setSelectedActors(prevSelected => prevSelected.filter(id => id !== actorId));
        }
    };

    const handleImageHover = (imageUrl: string) => {
        setHoveredImageUrl(imageUrl);
    };

    return (
        <div className="actors-admin-page">
            <div>
                <h1 className="actors-heading">Actors List</h1>
                <button className="select-actor-button button" onClick={() => setShowCheckboxes(!showCheckboxes)}>
                    {showCheckboxes ? "Hide Checkboxes" : "Select Actors"}
                </button>
                <button className="create-actor-button button" onClick={() => navigate("/actor/create")}>Create New Actor</button>

                {showCheckboxes && selectedActors.length > 0 && (
                    <button className="delete-selected-actor-button button" onClick={handleDeleteSelectedActors}>
                        Delete Selected Actors
                    </button>
                )}

                <table className="actors-table">
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>ID</th>
                            <th>Full Name</th>
                            <th>Biography</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {actors.map((actor, index) => (
                            <tr key={actor.id}>
                                <td>
                                    {showCheckboxes &&
                                        <input
                                            type="checkbox"
                                            checked={selectedActors.includes(actor.id)}
                                            onChange={(e) => handleCheckboxChange(e, actor.id)}
                                        />
                                    }
                                    {!showCheckboxes && index + 1}
                                </td>
                                <td>{actor.id}</td>
                                <td>{actor.fullName}</td>
                                <td>{actor.biography}</td>
                                <td>
                                    <div className="enlarged-image" style={{ display: hoveredImageUrl === actor.image ? 'block' : 'none' }}>
                                        <img src={hoveredImageUrl} alt="Hovered Actor" />
                                    </div>
                                    <img
                                        src={actor.image}
                                        alt={actor.fullName}
                                        className="actor-image"
                                        onMouseEnter={() => handleImageHover(actor.image)}
                                        onMouseLeave={() => setHoveredImageUrl('')}
                                    />
                                </td>
                                <td>
                                    <button className="delete-action-button" onClick={async () => {
                                        const confirmed = window.confirm("Are you sure you want to delete this actor?");
                                        if (confirmed) {
                                            try {
                                                await ActorService.deleteActor(actor.id);
                                                setActors(prevActors => prevActors.filter(a => a.id !== actor.id));
                                            } catch (error) {
                                                console.error('Error deleting actor:', error);
                                            }
                                        }
                                    }}>
                                        <FaTrash />
                                    </button>

                                    <button className="details-action-button">
                                        <FaInfo onClick={() => handleActorDetails(actor.id)} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ActorsPage;