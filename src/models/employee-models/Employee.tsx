import CinemaTheater from "../cinema-theater-models/Cinema-theater";
import EEmployeeRole from "./EEmployeeRole";

type Employee = null | {
    id: string;
    cinemaTheaterId: string;

    firstName: string;
    lastName: string;
    email: string;
    phoneNumber:string;
    dateOfBirth:Date;
    role:EEmployeeRole;
    //Relationships
    cinemaTheater: CinemaTheater;
};

export default Employee