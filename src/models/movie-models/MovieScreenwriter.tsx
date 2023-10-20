import Screenwriter from "../screenwriter-models/Screenwriter";
import Movie from "./Movie";

type MovieScreenwriter = null | {
    movieId: string;
    screenwriterId: string;
    
    //Relationships
    movie: Movie;
    screenwriter: Screenwriter;
};

export default MovieScreenwriter