import MovieProducer from "../movie-models/MovieProducer";

type Producer = null | {
    id: string;

    fullName: string;
    image: string;
    biography: string;
    dateOfBirth: Date;
    //Relationships
    movieProducers: MovieProducer[];
};

export default Producer