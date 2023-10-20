import Studio from "../studio-models/Studio";
import Movie from "./Movie";

type MovieStudio = null | {
    movieId: string;
    studioId: string;
    
    //Relationships
    movie: Movie;
    studio: Studio;
};

export default MovieStudio