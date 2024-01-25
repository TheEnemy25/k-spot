import Discount from "../discount-models/Discount";
import Hall from "../hall-models/Hall";
import Movie from "../movie-models/Movie";
import Ticket from "../ticket-models/Ticket";
import SessionPromoCode from "./SessionPromoCode";
import SessionSeat from "./SessionSeat";

type Session = null | {
    id: string;
    hallId: string;
    movieId: string;
    discountId: string;

    date: Date;
    startTime: string;
    //Relationships
    hall: Hall;
    movie: Movie;
    discount: Discount;
    sessionPromoCodes: SessionPromoCode[];
    sessionSeats: SessionSeat[];
    tickets: Ticket[];
 };
 
 export default Session