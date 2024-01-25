import City from "../city-models/City";
import Employee from "../employee-models/Employee";
import Hall from "../hall-models/Hall";
import Rental from "../rental-models/Rental";

type CinemaTheater = null | {
    id: string;
    cityId: string;

    address: string;
    contactInfo: string;
    //Relationships
    city: City;
    rentals: Rental[];
    halls: Hall[];
    employees:Employee[];
};

export default CinemaTheater