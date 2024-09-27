import React, { useState, useEffect } from 'react';
import ActorService from '../../../api-client/service/ActorService';
import { useRouter } from 'next/router';
import Actor from '../../../api-client/models/actor-models/Actor';

function ActorPage() {
    const router = useRouter();
    const { actorId } = router.query;
    const [actor, setActor] = useState<Actor | null>(null);

    useEffect(() => {
        async function fetchActor() {
            try {
                if (actorId) {
                    const actorData = await ActorService.getActorById(actorId as string);
                    actorData.dateOfBirth = new Date(actorData.dateOfBirth);
                    setActor(actorData);
                }
            } catch (error) {
                console.error('Error fetching actor:', error);
            }
        }

        fetchActor();
    }, [actorId]);

    return (
        <div className="text-white">
            <h1>Actor Details</h1>
            {actor ? (
                <div >
                    <h2>{actor.fullName}</h2>
                    <p ><strong>Biography:</strong> {actor.biography}</p>
                    <p><strong>Date of Birth:</strong> {actor.dateOfBirth.toLocaleDateString()}</p>
                    <p><strong>Country:</strong> {actor.country}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default ActorPage;
