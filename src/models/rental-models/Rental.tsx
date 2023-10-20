import CinemaTheater from "../cinema-theater-models/Cinema-theater";
import Movie from "../movie-models/Movie";

type Rental = null | {
    id: string;
    movieId: string;
    cinemaTheaterId: string;

    rentalDate: Date;
    //Relationships
    movie: Movie;
    cinemaTheater: CinemaTheater;
 };
 
 export default Rental