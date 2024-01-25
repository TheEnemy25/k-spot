import MovieGenre from "../movie-models/MovieGenre";

type Genre = null | {
    id: string;

    name: string;
    description: string;
    image: string;
    //Relationships
    movieGenres: MovieGenre[];
};

export default Genre