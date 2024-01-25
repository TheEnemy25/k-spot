import Seat from "../seat-models/Seat";
import ESeatStatus from "./ESeatStatus";
import Session from "./Session";

type SessionSeat = null | {
    sessionId: string;
    seatId: string;

    status: ESeatStatus;
    //Relationships
    session: Session;
    seat: Seat;
 };
 
 export default SessionSeat