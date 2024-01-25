import MovieProductionCountry from "../movie-models/MovieProductionCountry";

type ProductionCountry = null | {
    id: string;

    name: string;
    //Relationships
    movieProductionCountries: MovieProductionCountry[];
 };
 
 export default ProductionCountry