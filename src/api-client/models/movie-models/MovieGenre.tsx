import Genre from "../genre-models/Genre";
import Movie from "./Movie";

type MovieGenre = null | {
    movieId: string;
    genreId: string;
    
    //Relationships
    movie: Movie;
    genre: Genre;
};

export default MovieGenre