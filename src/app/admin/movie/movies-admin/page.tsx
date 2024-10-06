"use client";

import React, { useState, useEffect } from "react";
import Movie from "../../../../api-client/models/movie-models/Movie";
import MovieService from "../../../../api-client/service/MovieService";
import { FaTrash, FaInfo } from "react-icons/fa6";
import Image from "next/image";
import ImageModal from "../../../../components/modal-windows/image-modal/ImageModal";
import ConfirmDeleteModal from "../../../../components/modal-windows/delete-modal/ConfirmDeleteModal";
import "./MoviesAdminPage.module.scss";
import AdminButtons from "../../../../components/buttons/admin-buttons/AdminButtons";
import ActionButton from "../../../../components/buttons/action-button/ActionButton";
import useEntitySelection from "../../../../hooks/useSelectableEntities";


function MoviesAdminPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const [fullscreenImageUrl, setFullscreenImageUrl] = useState<string | null>(null);
  const [showSingleDeleteConfirmation, setShowSingleDeleteConfirmation] = useState(false);
  const [movieToDelete, setMovieToDelete] = useState<string | null>(null);

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
    selectedItems,
    toggleItemSelection,
    deleteSingleItem,
    deleteSelectedItems,
    resetSelections,
    confirmDeleteSelected,
    showBulkDeleteConfirmation,
    itemsToDelete,
  } = useEntitySelection(MovieService.deleteMovie, movies, setMovies);

  const toggleCheckboxes = () => {
    setShowCheckboxes((prevState) => {
      if (!prevState) {
        resetSelections();
      }
      return !prevState;
    });
  };

  const handleOpenImageModal = (imageUrl: string) => {
    setFullscreenImageUrl(imageUrl);
  };

  const confirmSingleDelete = (movieId: string) => {
    setMovieToDelete(movieId);
    setShowSingleDeleteConfirmation(true);
  };

  return (
    <>
      <section className="movies-admin">
        <h1 className="movies-admin__title">Movies List</h1>

        <AdminButtons
          toggleCheckboxes={toggleCheckboxes}
          showCheckboxes={showCheckboxes}
          selectedEntitiesCount={selectedItems.length}
          toggleDeleteConfirmation={confirmDeleteSelected}
          newItemLink="/admin/movie/create"
        />

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
                      checked={selectedItems.includes(movie.id)}
                      onChange={() => toggleItemSelection(movie.id)}
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
                      onClick={() => handleOpenImageModal(movie.imageLink)}
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
                    onClick={() => confirmSingleDelete(movie.id)}
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

        {showBulkDeleteConfirmation && (
          <ConfirmDeleteModal
            onClose={resetSelections}
            onConfirm={deleteSelectedItems}
            count={itemsToDelete.length}
            entityType="movies"
          />
        )}

        {showSingleDeleteConfirmation && (
          <ConfirmDeleteModal
            onClose={() => setShowSingleDeleteConfirmation(false)}
            onConfirm={() => {
              deleteSingleItem(movieToDelete!);
              setShowSingleDeleteConfirmation(false);
            }}
            entityType="movie"
          />
        )}

      </section >
    </>
  );
}

export default MoviesAdminPage;
