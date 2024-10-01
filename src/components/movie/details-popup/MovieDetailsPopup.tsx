import React from 'react';
import './MoviePopup.module.scss';
import Movie from '../../../api-client/models/movie-models/Movie';
import Link from 'next/link';

interface MovieDetailsPopupProps {
    movie: Movie;
    position: { top: number; left: number };
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

const MovieDetailsPopup: React.FC<MovieDetailsPopupProps> = ({ movie, position, onMouseEnter, onMouseLeave }) => (
    <div
        className="popup-overlay"
        style={{ top: position.top, left: position.left }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >
        <div className="popup-content">
            <h2>{movie.title}</h2>
            <p>Age Restriction: {movie.ageRestriction}</p>
            <p>Description: {movie.description}</p>
            <p>Rating: {movie.rating}</p>
            <p>Duration: {movie.duration}</p>
            <p>Release Date: {new Date(movie.releaseDate).toLocaleDateString()}</p>
            <Link href={`/movie/${movie.id}`}>View Details</Link>
        </div>
    </div>
);

export default MovieDetailsPopup;
