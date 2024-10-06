"use client";

import React, { useState, useEffect, useRef } from 'react';
import Movie from '../../../api-client/models/movie-models/Movie';
import MovieService from '../../../api-client/service/MovieService';
import './MoviesPage.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Info from "../../../../public/images/info.png";
import MovieDetailsPopup from '../../../components/movie/details-popup/MovieDetailsPopup';
import { getAgeIcon } from '../../../components/ageIcons';

const POPUP_WIDTH = 300;
const POPUP_OFFSET = 10;
const POPUP_HIDE_DELAY = 300;

const MoviesPage: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [hoveredMovie, setHoveredMovie] = useState<Movie | null>(null);
    const [popupPosition, setPopupPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const popupTimeout = useRef<NodeJS.Timeout | null>(null);

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
        const top = iconRect.top + window.scrollY;
        let left = iconRect.right + POPUP_OFFSET;

        if (left + POPUP_WIDTH > window.innerWidth) {
            left = iconRect.left - POPUP_WIDTH - POPUP_OFFSET;
        }

        return { top, left };
    };

    const handleMouseEnter = (movie: Movie, event: React.MouseEvent<HTMLImageElement>) => {
        if (popupTimeout.current) clearTimeout(popupTimeout.current);

        setHoveredMovie(movie);
        const iconRect = event.currentTarget.getBoundingClientRect();
        setPopupPosition(calculatePopupPosition(iconRect));
        setIsPopupVisible(true);
    };

    const handleMouseLeave = () => {
        popupTimeout.current = setTimeout(() => setIsPopupVisible(false), POPUP_HIDE_DELAY);
    };

    const handlePopupMouseEnter = () => {
        if (popupTimeout.current) clearTimeout(popupTimeout.current);
        setIsPopupVisible(true);
    };

    const handlePopupMouseLeave = () => {
        popupTimeout.current = setTimeout(() => setIsPopupVisible(false), POPUP_HIDE_DELAY);
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
                                    alt="Info"
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
                {hoveredMovie && isPopupVisible && (
                    <MovieDetailsPopup
                        movie={hoveredMovie}
                        position={popupPosition}
                        onMouseEnter={handlePopupMouseEnter}
                        onMouseLeave={handlePopupMouseLeave}
                    />
                )}
            </section>
        </>
    );
};

export default MoviesPage;
