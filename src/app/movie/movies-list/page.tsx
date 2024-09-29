"use client";

import React, { useState, useEffect, useRef } from 'react';
import Movie from '../../../api-client/models/movie-models/Movie';
import MovieService from '../../../api-client/service/MovieService';
import './MoviesPage.module.scss';

function MoviesPage() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
    const [tooltipDirection, setTooltipDirection] = useState<'left' | 'right'>('right');

    useEffect(() => {
        async function fetchMovies() {
            try {
                const moviesData = await MovieService.getMovies();
                setMovies(moviesData);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        }
        fetchMovies();
    }, []);

    const listInfoRef = useRef<HTMLDivElement>(null);
    const infoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleTooltipPosition = () => {
            const listInfoElement = listInfoRef.current;
            const infoElement = infoRef.current;

            if (listInfoElement && infoElement) {
                const listInfoRect = listInfoElement.getBoundingClientRect();
                const infoRect = infoElement.getBoundingClientRect();

                const isOverflowing = (listInfoRect.right + infoRect.width) > window.innerWidth;

                setTooltipDirection(isOverflowing ? 'left' : 'right');
            }
        };

        if (showAdditionalInfo) {
            handleTooltipPosition();
            window.addEventListener('resize', handleTooltipPosition);

            return () => {
                window.removeEventListener('resize', handleTooltipPosition);
            };
        }
    }, [showAdditionalInfo]);

    const handleMouseEnter = () => {
        setShowAdditionalInfo(true);
    };

    const handleMouseLeave = () => {
        setShowAdditionalInfo(false);
    };

    return (
        <div className='movies-pages'>
            <h1 className='movies-heading'>Movies List</h1>
            <div className="movie-content__list">
                {movies.map((movie, index) => (
                    <div key={movie.id} className='movie-details' style={{ backgroundImage: `url(${movie.imageLink})` }}>
                        <div className="movie-details__list">
                            <p>{movie.title}</p>
                            {movie.releaseDate instanceof Date && <p>{movie.releaseDate.toLocaleDateString()}</p>}
                            <div
                                ref={listInfoRef}
                                className='movie-details__list-info'
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                {/* <Zero /> */}
                            </div>
                            {showAdditionalInfo && (
                                <div
                                    ref={infoRef}
                                    className={`additional-info ${index % 6 === 5 ? "last-item" : ""}`}

                                >
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MoviesPage;


{/* {movie.ageRestriction === 0 && <Zero className="movie-age-restriction" />}
                            {movie.ageRestriction === 12 && <Twelve className="movie-age-restriction" />}
                            {movie.ageRestriction === 16 && <Sixteen className="movie-age-restriction" />}
                            {movie.ageRestriction === 18 && <Eighteen className="movie-age-restric tion" />}*/}






{/* <h2>{movie.title}</h2>
                        <p>Age Restriction: {movie.ageRestriction}</p>
                        <p>Rating: {movie.rating}</p>
                        <p>Duration: {movie.duration}</p> */}

// import { ReactComponent as Zero } from '../../../assets/svgs/0.svg';
// import { ReactComponent as Twelve } from '../../../assets/svgs/12.svg';
// import { ReactComponent as Sixteen } from '../../../assets/svgs/16.svg';