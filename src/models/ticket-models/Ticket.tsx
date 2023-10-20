import Receipt from "../receipt-models/Receipt";
import Session from "../session-models/Session";
import SessionSeat from "../session-models/SessionSeat";
import ShoppingCartItem from "../shopping-cart-models/ShoppingCartItem";
import ETicketStatus from "./ETicketStatus ";

type Ticket = null | {
    id: string;
    sessionId: string;
    sessionSeatId: string;
    receiptId: string;

    status: ETicketStatus;
    row: number;
    seatNumber: number;
    //Relationships
    session: Session;
    sessionSeat: SessionSeat;
    receipt: Receipt;
    shoppingCartItems: ShoppingCartItem[];
 };
 
 export default Ticket