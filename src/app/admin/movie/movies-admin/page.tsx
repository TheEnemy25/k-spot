import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Movie from "../../../../api-client/models/movie-models/Movie";
import MovieService from "../../../../api-client/service/MovieService";
import "./MoviesAdminPage.module.scss";
import { FaTrash, FaInfo } from "react-icons/fa6";

function MoviesAdminPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovies, setSelectedMovies] = useState<string[]>([]);
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const [fullscreenImageUrl, setFullscreenImageUrl] = useState<string | null>(
    null
  );

  const router = useRouter();

  const handleMovieDetails = (movieId: string) => {
    router.push(`/movie/${movieId}`);
  };

  useEffect(() => {
    async function fetchMovies() {
      try {
        const moviesData = await MovieService.getMovies();
        setMovies(moviesData);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }

    fetchMovies();
  }, []);

  const handleDeleteSelectedMovies = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete selected movies?"
    );
    if (confirmed) {
      try {
        await Promise.all(
          selectedMovies.map((movieId) => MovieService.deleteMovie(movieId))
        );
        setMovies((prevMovies) =>
          prevMovies.filter((movie) => !selectedMovies.includes(movie.id))
        );
        setSelectedMovies([]);
      } catch (error) {
        console.error("Error deleting selected movies:", error);
      }
    }
  };

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    movieId: string
  ) => {
    if (event.target.checked) {
      setSelectedMovies((prevSelected) => [...prevSelected, movieId]);
    } else {
      setSelectedMovies((prevSelected) =>
        prevSelected.filter((id) => id !== movieId)
      );
    }
  };

  const handleOpenFullscreenImage = (imageUrl: string) => {
    setFullscreenImageUrl(imageUrl);
  };

  return (
    <div className="movies-admin-page">
      <div>
        <h1 className="movies-heading">Movies List</h1>
        <button
          className="select-movie-button button"
          onClick={() => setShowCheckboxes(!showCheckboxes)}
        >
          {showCheckboxes ? "Hide Checkboxes" : "Select Movies"}
        </button>
        <button
          className="create-movie-button button"
          onClick={() => router.push("/movie-pages/create/MovieFormPage")}
        >
          Create New Movie
        </button>

        {showCheckboxes && selectedMovies.length > 0 && (
          <button
            className="delete-selected-movie-button button"
            onClick={handleDeleteSelectedMovies}
          >
            Delete Selected Movies
          </button>
        )}

        <table className="movie-table">
          <thead>
            <tr>
              <th>№</th>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Image</th>
              <th>Rating</th>
              <th>Duration</th>
              <th>Release Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr key={movie.id}>
                <td>
                  {showCheckboxes && (
                    <input
                      type="checkbox"
                      checked={selectedMovies.includes(movie.id)}
                      onChange={(e) => handleCheckboxChange(e, movie.id)}
                    />
                  )}
                  {!showCheckboxes && index + 1}
                </td>
                <td>{movie.id}</td>
                <td>{movie.title}</td>
                <td>{movie.description}</td>
                <td>
                  <div
                    className="enlarged-image"
                    style={{ display: fullscreenImageUrl ? "flex" : "none" }}
                    onClick={() => setFullscreenImageUrl(null)}
                  >
                    <img
                      src={fullscreenImageUrl || ""}
                      alt="Fullscreen Movie"
                      className="fullscreen-image"
                    />
                  </div>
                  <img
                    src={movie.imageLink}
                    alt={movie.title}
                    className="movie-image"
                    onClick={() => handleOpenFullscreenImage(movie.imageLink)}
                  />
                </td>
                <td>{movie.rating}</td>
                <td>{movie.duration}</td>
                <td>
                  {movie.releaseDate
                    ? new Date(movie.releaseDate).toLocaleDateString()
                    : ""}
                </td>
                <td>
                  <button
                    className="delete-action-button"
                    onClick={async () => {
                      const confirmed = window.confirm(
                        "Are you sure you want to delete this movie?"
                      );
                      if (confirmed) {
                        try {
                          await MovieService.deleteMovie(movie.id);
                          setMovies((prevMovies) =>
                            prevMovies.filter((m) => m.id !== movie.id)
                          );
                        } catch (error) {
                          console.error("Error deleting movie:", error);
                        }
                      }
                    }}
                  >
                    <FaTrash />
                  </button>
                  <button className="details-action-button">
                    <FaInfo onClick={() => handleMovieDetails(movie.id)} />
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

export default MoviesAdminPage;
