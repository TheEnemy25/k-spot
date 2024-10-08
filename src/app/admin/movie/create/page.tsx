'use client';

import { useState } from 'react';
import { z } from 'zod';
import './MovieFormPage.module.scss';
import MovieService from '../../../../api-client/service/MovieService';
import { MovieDTO } from '../../../../api-client/dtos/MovieDTO';

const movieSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }),
    ageRestriction: z.number().min(0, { message: "Age restriction must be a positive number" }),
    description: z.string().min(10, { message: "Description must be at least 10 characters" }),
    imageLink: z.string().url({ message: "Invalid URL format for image link" }).optional(),
    trailerLink: z.string().url({ message: "Invalid URL format for trailer link" }).optional(),
    rating: z.number().min(0.1, { message: "Rating must be greater than 0 and less than or equal to 10" }).max(10, { message: "Rating must be between 0 and 10" }),
    duration: z.string().regex(/^(?!00:00:00$)\d{2}:\d{2}:\d{2}$/, { message: "Duration must be in HH:MM:SS format and cannot be 00:00:00" }),
    releaseDate: z.date().min(new Date('1900-01-01'), { message: "Invalid release date" }),
});

const CreateMoviePage = () => {
    const [formData, setFormData] = useState<MovieDTO>({
        title: '',
        ageRestriction: 0,
        description: '',
        imageLink: '',
        trailerLink: '',
        rating: 0,
        duration: '00:00:00',
        releaseDate: new Date(),
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const parseValue = (name: string, value: string) => {
        switch (name) {
            case 'releaseDate':
                return new Date(value);
            case 'ageRestriction':
            case 'rating':
                return Number(value);
            default:
                return value;
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: parseValue(name, value),
        }));

        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const result = movieSchema.safeParse(formData);
        if (!result.success) {
            const validationErrors = Object.fromEntries(
                Object.entries(result.error.flatten().fieldErrors).map(([key, value]) => [
                    key,
                    value[0],
                ])
            );
            setErrors(validationErrors);
            return;
        }

        try {
            await MovieService.createMovie({
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
            });
            alert('Movie created successfully!');
        } catch (error) {
            console.error('Error creating movie:', error);
        }
    };

    return (
        <>
            <section className="create-movie">

                <h1 className="create-movie__title">Create a New Movie</h1>

                <form className="create-movie__form" onSubmit={handleSubmit}>
                    <div className="create-movie__field">
                        <label className="create-movie__label">Title</label>
                        <input
                            type="text"
                            className="create-movie__input"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Enter a title"
                        />
                        {errors.title && <span className="error">{errors.title}</span>}
                    </div>

                    <div className="create-movie__field">
                        <label className="create-movie__label">Age Restriction</label>
                        <input
                            type="number"
                            className="create-movie__input"
                            name="ageRestriction"
                            value={formData.ageRestriction}
                            onChange={handleChange}
                            placeholder="Enter an age restriction"
                        />
                        {errors.ageRestriction && <span className="error">{errors.ageRestriction}</span>}
                    </div>

                    <div className="create-movie__field">
                        <label className="create-movie__label">Description</label>
                        <textarea
                            className="create-movie__textarea"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Enter a description"
                        ></textarea>
                        {errors.description && <span className="error">{errors.description}</span>}
                    </div>

                    <div className="create-movie__field">
                        <label className="create-movie__label">Image Link</label>
                        <input
                            type="text"
                            className="create-movie__input"
                            name="imageLink"
                            value={formData.imageLink}
                            onChange={handleChange}
                            placeholder="Enter an image link"
                        />
                        {errors.imageLink && <span className="error">{errors.imageLink}</span>}
                    </div>

                    <div className="create-movie__field">
                        <label className="create-movie__label">Trailer Link</label>
                        <input
                            type="text"
                            className="create-movie__input"
                            name="trailerLink"
                            value={formData.trailerLink}
                            onChange={handleChange}
                            placeholder="Enter a trailer link"
                        />
                        {errors.trailerLink && <span className="error">{errors.trailerLink}</span>}
                    </div>

                    <div className="create-movie__field">
                        <label className="create-movie__label">Rating</label>
                        <input
                            type="number"
                            className="create-movie__input"
                            name="rating"
                            step="0.1"
                            value={formData.rating}
                            onChange={handleChange}
                            placeholder="Enter a rating"
                        />
                        {errors.rating && <span className="error">{errors.rating}</span>}
                    </div>

                    <div className="create-movie__field">
                        <label className="create-movie__label">Duration</label>
                        <input
                            type="text"
                            className="create-movie__input"
                            name="duration"
                            value={formData.duration}
                            onChange={handleChange}
                            placeholder="Enter a duration in HH:MM:SS"
                        />
                        {errors.duration && <span className="error">{errors.duration}</span>}
                    </div>

                    <div className="create-movie__field">
                        <label className="create-movie__label">Release Date</label>
                        <input
                            type="date"
                            className="create-movie__input"
                            name="releaseDate"
                            value={formData.releaseDate.toISOString().split('T')[0]}
                            onChange={handleChange}
                            placeholder="Enter a release date"
                        />
                        {errors.releaseDate && <span className="error">{errors.releaseDate}</span>}
                    </div>

                    <button className="create-movie__button" type="submit">
                        Create Movie
                    </button>

                </form>

            </section>
        </>
    );
};

export default CreateMoviePage;
