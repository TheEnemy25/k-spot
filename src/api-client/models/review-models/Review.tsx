import Movie from "../movie-models/Movie";
import AppUser from "../user-models/AppUser";

type Review = null | {
    id: string;
    movieId: string;
    userId: string;

    content: string;
    rating: number;
    date: Date;
    //Relationships
    movie: Movie;
    user: AppUser;
 };
 
 export default Review