import MovieActor from "../movie-models/MovieActor";

type Actor = null | {
    id: string;

    fullName: string;
    image: string;
    biography: string;
    dateOfBirth: Date;
    //Relationships
    movieActor: MovieActor[];
};

export default Actor