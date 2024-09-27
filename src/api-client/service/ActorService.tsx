import APIRoutes from "../api/APIRoutes";
import Actor from "../models/actor-models/Actor";
import APIService from "../api/APIService"

const ActorService = {
    getActors: async (): Promise<Actor[]> => {
        try {
            return await APIService.get<Actor[]>(`${APIRoutes.actorControllerUrl()}/get-all`);
        }
        catch (error) {
            console.error('Error while fetching actors:', error);
            throw error;
        }
    },

    getActorById: async (actorId: string): Promise<Actor> => {
        try {
            return await APIService.get<Actor>(`${APIRoutes.actorControllerUrl()}/get-by-id`, { Id: actorId });
        } catch (error) {
            console.error('Error fetching actor by id:', error);
            throw error;
        }
    },

    createActor: async (actorData: Omit<Actor, 'id'>): Promise<Actor> => {
        try {
            const newActor = await APIService.post<Actor>(`${APIRoutes.actorControllerUrl()}/create`, actorData);
            return newActor;
        } catch (error) {
            console.error('Error creating actor:', error);
            throw error;
        }
    },

    updateActor: async (actorId: string, actorData: Actor): Promise<Actor> => {
        try {
            return await APIService.put<Actor>(`${APIRoutes.actorControllerUrl()}/put/${actorId}`, actorData);
        } catch (error) {
            console.error('Error updating actor:', error);
            throw error;
        }
    },

    deleteActor: async (actorId: string): Promise<void> => {
        try {
            await APIService.delete(`${APIRoutes.actorControllerUrl()}/delete?Id=${actorId}`);
        }
        catch (error) {
            console.error('Error deleting actor:', error);
            throw error;
        }
    }
};

export default ActorService;
