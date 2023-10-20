import Product from "../product-models/Product";
import Ticket from "../ticket-models/Ticket";
import ShoppingCart from "./ShoppingCart";

type ShoppingCartItem = null | {
    id: string;
    shoppingCartId: string;
    ticketId: string;
    productId: string;

    quantity: number;
    unitPrice: number;
    //Relationships
    shoppingCart: ShoppingCart;
    ticket: Ticket;
    product: Product;
 };
 
 export default ShoppingCartItem