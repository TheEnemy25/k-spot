import Receipt from "../receipt-models/Receipt";
import AppUser from "../user-models/AppUser";
import ShoppingCartItem from "./ShoppingCartItem";

type ShoppingCart = null | {
    id: string;
    receiptId: string;
    userId: string;

    
    //Relationships
    receipt: Receipt;
    user: AppUser;
    shoppingCartItems: ShoppingCartItem[];
 };
 
 export default ShoppingCart