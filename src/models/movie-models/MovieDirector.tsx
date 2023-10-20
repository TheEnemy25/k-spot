import Director from "../director-models/Director";
import Movie from "./Movie";

type MovieDirector = null | {
    movieId: string;
    directorId: string;
    
    //Relationships
    movie: Movie;
    director: Director;
};

export default MovieDirector