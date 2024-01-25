import ShoppingCart from "../shopping-cart-models/ShoppingCart";
import Ticket from "../ticket-models/Ticket";

type Receipt = null | {
    id: string;
    shoppingCartId: string;

    totalAmount: number;
    createdAt: Date;
    //Relationships
    shoppingCart: ShoppingCart;
    tickets: Ticket[];
 };
 
 export default Receipt