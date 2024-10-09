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

            <div>
                <Link href={`/movie/${movie.id}`} className='popup-content__title'>{movie.title}</Link>
            </div>

            <p className="popup-content__description">Description: {movie.description}</p>

            <div className='popup-content__info-details'>
                <p>Age Restriction:</p>
                <p>+{movie.ageRestriction}</p>

                <p>Rating:</p>
                <p>{movie.rating}</p>

                <p>Duration:</p>
                <p>{movie.duration}</p>

                <p>Release Date:</p>
                <p>{new Date(movie.releaseDate).toLocaleDateString()}</p>
            </div>

        </div>
    </div>
);

export default MovieDetailsPopup;
