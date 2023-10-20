import Actor from "../actor-models/Actor";
import Movie from "./Movie";

type MovieActor = null | {
    movieId: string;
    actorId: string;
    
    //Relationships
    movie: Movie;
    actor: Actor;
};

export default MovieActor