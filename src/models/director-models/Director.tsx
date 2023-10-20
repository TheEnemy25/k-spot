import MovieDirector from "../movie-models/MovieDirector";

type Director = null | {
    id: string;

    fullName: string;
    image: string;
    biography: string;
    country: string;
    dateOfBirth:Date;
    //Relationships
    movieDirectors: MovieDirector[];
};

export default Director