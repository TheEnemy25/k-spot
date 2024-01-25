import ProductionCountry from "../production-country-models/ProductionCountry";
import Movie from "./Movie";

type MovieProductionCountry = null | {
    movieId: string;
    productionCountryId: string;
    
    //Relationships
    movie: Movie;
    productionCountry: ProductionCountry;
};

export default MovieProductionCountry