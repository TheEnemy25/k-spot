"use client"

import React, { useState, useEffect } from "react";
import Movie from "../../../../api-client/models/movie-models/Movie";
import MovieService from "../../../../api-client/service/MovieService";
import { FaTrash, FaInfo } from "react-icons/fa6";
import Image from "next/image";
import ActionButton from "../../../../components/action-button/ActionButton";
import useSelectableEntities from "../../../../hooks/useSelectableEntities";
import ImageModal from "../../../../components/modal-windows/ImageModal";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import "./MoviesAdminPage.module.scss";

function MoviesAdminPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const [fullscreenImageUrl, setFullscreenImageUrl] = useState<string | null>(null);
  const [showSingleConfirmDelete, setShowSingleConfirmDelete] = useState(false);
  const [entityToDelete, setEntityToDelete] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await MovieService.getMovies();
        setMovies(moviesData);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const {
    selectedEntities,
    handleCheckboxChange,
    handleSingleDelete,
    handleDeleteSelectedEntities,
    resetSelectedEntities,
    toggleDeleteConfirmation,
    showConfirmDelete,
    entitiesToDelete,
  } = useSelectableEntities(MovieService.deleteMovie, movies, setMovies);

  const toggleCheckboxes = () => {
    setShowCheckboxes((prev) => {
      if (!prev) {
        resetSelectedEntities();
      }
      return !prev;
    });
  };

  const handleOpenFullscreenImage = (imageUrl: string) => {
    setFullscreenImageUrl(imageUrl);
  };

  const handleSingleDeleteWithConfirmation = (movieId: string) => {
    setEntityToDelete(movieId);
    setShowSingleConfirmDelete(true);
  };

  return (
    <>
      <section className="movies-admin">
        <h1 className="movies-admin__title">Movies List</h1>

        <div className="movies-admin__buttons">
          <ActionButton onClick={toggleCheckboxes} className="movies-admin__select-button">
            {showCheckboxes ? "Hide Checkboxes" : "Select Movies"}
          </ActionButton>
          <ActionButton href="/movie-pages/create/MovieFormPage" className="movies-admin__create-button">
            Create New Movie
          </ActionButton>

          {showCheckboxes && selectedEntities.length > 0 && (
            <ActionButton
              onClick={toggleDeleteConfirmation}
              className="movies-admin__select-delete-button"
            >
              Delete Selected Movies
            </ActionButton>
          )}
        </div>

        <table className="movies-admin__table">
          <thead>
            <tr className="movies-admin__table-row">
              <th className="movies-admin__table-header">№</th>
              <th className="movies-admin__table-header">ID</th>
              <th className="movies-admin__table-header">Title</th>
              <th className="movies-admin__table-header">Description</th>
              <th className="movies-admin__table-header">Image</th>
              <th className="movies-admin__table-header">Rating</th>
              <th className="movies-admin__table-header">Duration</th>
              <th className="movies-admin__table-header">Release Date</th>
              <th className="movies-admin__table-header">Actions</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr className="movies-admin__table-row" key={movie.id}>
                <td className="movies-admin__table-cell">
                  {showCheckboxes && (
                    <input
                      type="checkbox"
                      checked={selectedEntities.includes(movie.id)}
                      onChange={() => handleCheckboxChange(movie.id)}
                    />
                  )}
                  {!showCheckboxes && index + 1}
                </td>
                <td className="movies-admin__table-cell">{movie.id}</td>
                <td className="movies-admin__table-cell">{movie.title}</td>
                <td className="movies-admin__table-cell">{movie.description}</td>
                <td className="movies-admin__table-cell">
                  <div className="movies-admin__image-center">
                    <Image
                      src={movie.imageLink}
                      alt={movie.title}
                      className="movies-admin__image"
                      width={30}
                      height={30}
                      onClick={() => handleOpenFullscreenImage(movie.imageLink)}
                    />
                  </div>
                </td>
                <td className="movies-admin__table-cell">{movie.rating}</td>
                <td className="movies-admin__table-cell">{movie.duration}</td>
                <td className="movies-admin__table-cell">
                  {movie.releaseDate ? new Date(movie.releaseDate).toLocaleDateString() : ""}
                </td>
                <td className="movies-admin__table-cell">
                  <ActionButton
                    onClick={() => handleSingleDeleteWithConfirmation(movie.id)}
                    className="movies-admin__action-button--delete"
                  >
                    <FaTrash />
                  </ActionButton>

                  <ActionButton href={`/movie/${movie.id}`} className="movies-admin__action-button--details">
                    <FaInfo />
                  </ActionButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <ImageModal imageUrl={fullscreenImageUrl} onClose={() => setFullscreenImageUrl(null)} />

        {showConfirmDelete && (
          <ConfirmDeleteModal
            onClose={resetSelectedEntities}
            onConfirm={handleDeleteSelectedEntities}
            count={entitiesToDelete.length}
          />
        )}

        {showSingleConfirmDelete && (
          <ConfirmDeleteModal
            onClose={() => setShowSingleConfirmDelete(false)}
            onConfirm={() => handleSingleDelete(entityToDelete!)}
          />
        )}
      </section>
    </>
  );
}

export default MoviesAdminPage;
