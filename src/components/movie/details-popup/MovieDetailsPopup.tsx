import React from 'react';
import './MoviePopup.module.scss';
import Movie from '../../../api-client/models/movie-models/Movie';

interface IMovieDetailsPopupProps {
    movie: Movie;
    position: { top: number; left: number };
}

const MovieDetailsPopup: React.FC<IMovieDetailsPopupProps> = ({ movie, position }) => {
    return (
        <div className="popup-overlay">
            <div
                className="popup-content"
                style={{ top: position.top, left: position.left }}
            >
                <h2>{movie.title}</h2>
                <p>Age Restriction: {movie.ageRestriction}</p>
                <p>Description: {movie.description}</p>
                <p>Rating: {movie.rating}</p>
                <p>Duration: {movie.duration}</p>
                <p>Release Date: {new Date(movie.releaseDate).toLocaleDateString()}</p>
            </div>
        </div>
    );
};

export default MovieDetailsPopup;