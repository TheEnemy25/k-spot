"use client";

import { useEffect, useState } from 'react';
import MovieService from '../../../api-client/service/MovieService';
import Movie from '../../../api-client/models/movie-models/Movie';
import './MoviePage.module.scss';
import Image from 'next/image';

const MovieDetail = ({ params }) => {
    const { movieId } = params;
    const [movie, setMovie] = useState<Movie | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (movieId) {
            const fetchMovie = async () => {
                try {
                    const fetchedMovie = await MovieService.getMovieById(movieId);
                    setMovie(fetchedMovie);
                } catch (err) {
                    console.error(err);
                    setError('Failed to load movie details.');
                } finally {
                    setLoading(false);
                }
            };

            fetchMovie();
        }
    }, [movieId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!movie) return <div>No movie found.</div>;

    const getYouTubeVideoId = (url: string) => {
        const urlPattern = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^&\n]{11})/;
        const match = url.match(urlPattern);
        return match ? match[1] : null;
    };

    const videoId = getYouTubeVideoId(movie.trailerLink);

    return (
        <section className='movie-page'>
            {videoId && (
                <div className="movie-page__trailer">
                    <iframe
                        className='movie-page__trailer-video'
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={`Trailer for ${movie.title}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            )}
            <article className='movie-page__content'>
                <div className='movie-page__content-image'>
                    <Image
                        src={movie.imageLink}
                        alt={movie.title}
                        layout="fill"
                        className="movie-page__content-image-poster"
                    />
                </div>
                <div className='movie-page__content-info'>
                    <h1 className='movie-page__info-title'>{movie.title}</h1>
                    <div className='movie-page__info-details'>

                        <p className='label'>Rating:</p>
                        <p className='value'>{movie.rating}</p>

                        <p className='label'>Age restriction:</p>
                        <p className='value'>+{movie.ageRestriction}</p>

                        <p className='label'>Duration:</p>
                        <p className='value'>{movie.duration}</p>

                        <p className='label'>Release Date:</p>
                        <p className='value'>{new Date(movie.releaseDate).toLocaleDateString()}</p>

                    </div>

                </div>
            </article>
            <h2 className='movie-page__info-description'>
                Description
                <p className='movie-page__info-description-p'>{movie.description}</p>
            </h2>
        </section>
    );
};

export default MovieDetail;

// div className = 'movie-page__content-info' >
//                     <h1 className='movie-page__info-title'>{movie.title}</h1>
//                     <p className='movie-page__info-rating'>Rating: {movie.rating}</p>
//                     <p className='movie-page__info-duration'>Duration: {movie.duration}</p>
//                     <p className='movie-page__info-release'>Release Date: {new Date(movie.releaseDate).toLocaleDateString()}</p>
//                     <h2 className='movie-page__info-description'>
//                         Description
//                         <p className='movie-page__info-description-p'>{movie.description}</p>
//                     </h2>
//                 </div >
