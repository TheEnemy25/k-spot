import CinemaTheater from "../cinema-theater-models/Cinema-theater";
import Seat from "../seat-models/Seat";
import Session from "../session-models/Session";
import EHallStatus from "./EHallStatus";
import EHallType from "./EHallType";

type Hall = null | {
    id: string;
    сinemaTheaterId:string;

    number: number;
    rows: number;
    seatsPerRow: number;
    normalSeatsCount: number;
    vipSeatsCount: number;
    hallType: EHallType;
    status: EHallStatus;
    basePrice: number;
    vipPrice: number;
    //Relationships
    cinemaTheater: CinemaTheater;
    seats: Seat[];
    sessions: Session[];
};

export default Hall