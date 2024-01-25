import MovieStudio from "../movie-models/MovieStudio";

type Studio = null | {
    id: string;

    name: string;
    description: string;
    image: string;
    //Relationships
    movieStudios: MovieStudio[];
 };
 
 export default Studio