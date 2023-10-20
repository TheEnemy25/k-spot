import CinemaTheater from "../cinema-theater-models/Cinema-theater";
import Country from "../country-models/Country";

type City = null | {
    id: string;
    countryId: string;

    name: string;
    //Relationships
    country: Country;
    cinemaTheaters: CinemaTheater[];
};

export default City