import Producer from "../producer-models/Producer";
import Movie from "./Movie";

type MovieProducer = null | {
    movieId: string;
    producerId: string;
    
    //Relationships
    movie: Movie;
    producer: Producer;
};

export default MovieProducer