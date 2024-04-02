import React, { useState } from 'react';
import Actor from '../../../api-client/models/actor-models/Actor';
import ActorService from '../../../api-client/service/ActorService';

interface ActorFormProps {
    onActorCreated: (newActor: Actor) => void;
}

const useActorForm = () => {
    const INITIAL_FORM_STATE = {
        fullName: '',
        image: '',
        biography: '',
        dateOfBirth: '',
        country: ''
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

function ActorFormPage({ onActorCreated }: ActorFormProps) {
    const { formData, handleChange, resetForm } = useActorForm();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const newActorData = {
                ...formData,
                dateOfBirth: new Date(formData.dateOfBirth),
                movieActor: []
            };
            const newActor = await ActorService.createActor(newActorData);
            onActorCreated(newActor);
            resetForm();
        } catch (error) {
            console.error('Error creating actor:', error);
        }
    };

    return (
        <div>
            <h2>Create Actor</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Full Name:
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
                </label>
                <label>
                    Image URL:
                    <input type="text" name="image" value={formData.image} onChange={handleChange} required />
                </label>
                <label>
                    Biography:
                    <textarea name="biography" value={formData.biography} onChange={handleChange} required />
                </label>
                <label>
                    Date of Birth:
                    <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
                </label>
                <label>
                    Country:
                    <input name="country" value={formData.country} onChange={handleChange} required />
                </label>
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default ActorFormPage;
