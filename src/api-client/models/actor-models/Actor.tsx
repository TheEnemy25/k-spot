import MovieActor from "../movie-models/MovieActor";

type Actor = {
    id: string;

    fullName: string;
    image: string;
    biography: string;
    dateOfBirth: Date;
    country: string;
    //Relationships
    movieActor: MovieActor[];
};

export default Actor