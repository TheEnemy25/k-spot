import MovieScreenwriter from "../movie-models/MovieScreenwriter";

type Screenwriter = null | {
    id: string;

    fullName: string;
    image: string;
    biography: string;
    dateOfBirth: Date;
    //Relationships
    movieScreenwriters: MovieScreenwriter[];
 };
 
 export default Screenwriter