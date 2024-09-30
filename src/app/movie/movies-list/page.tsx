"use client";

import React, { useState, useEffect } from 'react';
import Movie from '../../../api-client/models/movie-models/Movie';
import MovieService from '../../../api-client/service/MovieService';
import './MoviesPage.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { getAgeIcon } from '../../../components/ageIcons';
import Info from "../../../../public/images/info.png";
import MoviePopup from '../../../components/movie/details-popup/MovieDetailsPopup';
import MovieDetailsPopup from '../../../components/movie/details-popup/MovieDetailsPopup';

const POPUP_WIDTH = 300;
const POPUP_OFFSET = 10;

const MoviesPage: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [hoveredMovie, setHoveredMovie] = useState<Movie | null>(null);
    const [popupPosition, setPopupPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });

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

    const calculatePopupPosition = (iconRect: DOMRect): { top: number; left: number } => {
        const screenWidth = window.innerWidth;
        const popupLeft = iconRect.right + POPUP_OFFSET;

        if (popupLeft + POPUP_WIDTH > screenWidth) {
            return {
                top: iconRect.top + window.scrollY,
                left: iconRect.left - POPUP_WIDTH - POPUP_OFFSET
            };
        } else {
            return {
                top: iconRect.top + window.scrollY,
                left: popupLeft
            };
        }
    };

    const handleMouseEnter = (movie: Movie, event: React.MouseEvent<HTMLImageElement>) => {
        setHoveredMovie(movie);
        const iconRect = event.currentTarget.getBoundingClientRect();
        setPopupPosition(calculatePopupPosition(iconRect));
    };

    const handleMouseLeave = () => {
        setHoveredMovie(null);
    };

    return (
        <>
            <section className="movies">
                <h1 className="movies__title">Movies List</h1>
                <div className="movies__list">
                    {movies.map((movie) => (
                        <article className="movies__item" key={movie.id}>
                            <div className="movies__icons">
                                <Image
                                    className="movies__age-icon"
                                    src={getAgeIcon(movie.ageRestriction)}
                                    alt={`${movie.ageRestriction}`}
                                    width={30}
                                    height={30}
                                />
                                <Image
                                    src={Info}
                                    className="movies__info-icon"
                                    alt={`Info`}
                                    width={30}
                                    height={30}
                                    onMouseEnter={(event) => handleMouseEnter(movie, event)}
                                    onMouseLeave={handleMouseLeave}
                                />
                            </div>
                            <Image
                                className="movies__poster"
                                src={movie.imageLink}
                                alt={movie.title}
                                layout="fill"
                            />
                            <div className="movies__content">
                                <Link href={`/movie/${movie.id}`} className="movies__content-title">
                                    {movie.title}
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
                {hoveredMovie && (
                    <MovieDetailsPopup movie={hoveredMovie} position={popupPosition} />
                )}
            </section>
        </>
    );
};

export default MoviesPage;
