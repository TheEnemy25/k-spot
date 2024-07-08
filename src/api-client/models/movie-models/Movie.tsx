import Rental from "../rental-models/Rental";
import Review from "../review-models/Review";
import Session from "../session-models/Session";
import MovieActor from "./MovieActor";
import MovieDirector from "./MovieDirector";
import MovieGenre from "./MovieGenre";
import MovieProducer from "./MovieProducer";
import MovieProductionCountry from "./MovieProductionCountry";
import MovieScreenwriter from "./MovieScreenwriter";
import MovieStudio from "./MovieStudio";

type Movie = {
    id: string;

    title: string;
    ageRestriction: number;
    description: string;
    imageLink: string;
    trailerLink: string;
    rating: number;
    duration: string;
    releaseDate: Date;
    //Relationships
    movieActors: MovieActor[];
    movieDirectors: MovieDirector[];
    movieGenres: MovieGenre[];
    movieProducers: MovieProducer[];
    movieProductionCountries: MovieProductionCountry[];
    movieScreenwriters: MovieScreenwriter[];
    movieStudios: MovieStudio[];
    rentals: Rental[];
    reviews: Review[];
    sessions: Session[];
};

export default Movie