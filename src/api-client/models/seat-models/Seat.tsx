import Hall from "../hall-models/Hall";
import SessionSeat from "../session-models/SessionSeat";
import ShoppingCartItem from "../shopping-cart-models/ShoppingCartItem";

type Seat = null | {
    id: string;
    hallId: string;

    row: number;
    number: number;
    //Relationships
    hall: Hall;
    sessionSeats: SessionSeat[];
    shoppingCartItems: ShoppingCartItem[];
 };
 
 export default Seat