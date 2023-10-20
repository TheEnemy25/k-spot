import City from "../city-models/City";

type Country = null | {
    id: string;

    name: string;
    countryCode: string;
    //Relationships
    cities: City[];
};

export default Country