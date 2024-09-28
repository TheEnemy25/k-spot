"use client";

import React, { useState } from 'react';
import Movie from '../../../api-client/models/movie-models/Movie';
import MovieService from '../../../api-client/service/MovieService';
import { AxiosError } from 'axios';
import "./MovieFormPage.module.scss"

interface MovieFormProps {
    onMovieCreated: (newMovie: Movie) => void;
}

const useMovieForm = () => {
    const INITIAL_FORM_STATE = {
        title: '',
        ageRestriction: 0,
        description: '',
        imageLink: '',
        trailerLink: '',
        rating: 0,
        duration: '',
        releaseDate: ''
    };

    const [formData, setFormData] = useState(INITIAL_FORM_STATE);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const resetForm = () => {
        setFormData(INITIAL_FORM_STATE);
    };

    return { formData, handleChange, resetForm };
};

function MovieFormPage({ onMovieCreated }: MovieFormProps) {
    const { formData, handleChange, resetForm } = useMovieForm();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const releaseDate = new Date(formData.releaseDate);
            const newMovieData = {
                ...formData,
                movieActors: [],
                movieDirectors: [],
                movieGenres: [],
                movieProducers: [],
                movieProductionCountries: [],
                movieScreenwriters: [],
                movieStudios: [],
                rentals: [],
                reviews: [],
                sessions: [],
                releaseDate: releaseDate,
            };
            const newMovie = await MovieService.createMovie(newMovieData);
            onMovieCreated(newMovie);
            resetForm();
        } catch (error) {
            if ((error as AxiosError).response) {
                console.error('Error creating movie:', (error as AxiosError).response?.data);
            } else {
                console.error('Unknown error:', error);
            }
        }
    };
    return (
        <div className='movie-form-page'>
            <h2>Create Movie</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" name="title" placeholder="title" value={formData.title} onChange={handleChange} required />
                </label>
                <label>
                    Age Restriction:
                    <input type="number" name="ageRestriction" placeholder="ageRestriction" value={formData.ageRestriction} onChange={handleChange} required />
                </label>
                <label>
                    Description:
                    <textarea name="description" placeholder="description" value={formData.description} onChange={handleChange} required />
                </label>
                <label>
                    Image URL:
                    <input type="text" name="imageLink" placeholder="imageLink" value={formData.imageLink} onChange={handleChange} required />
                </label>
                <label>
                    Trailer Link:
                    <input type="text" name="trailerLink" placeholder="trailerLink" value={formData.trailerLink} onChange={handleChange} required />
                </label>
                <label>
                    Rating:
                    <input type="number" name="rating" placeholder="rating" value={formData.rating} onChange={handleChange} required />
                </label>
                <label>
                    Duration:
                    <input type="text" name="duration" placeholder="duration" value={formData.duration} onChange={handleChange} required />
                </label>
                <label>
                    Release Date:
                    <input type="date" name="releaseDate" placeholder="releaseDate" value={formData.releaseDate} onChange={handleChange} required />
                </label>
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default MovieFormPage;
