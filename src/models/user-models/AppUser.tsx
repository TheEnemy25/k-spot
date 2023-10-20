import Review from "../review-models/Review";
import ShoppingCart from "../shopping-cart-models/ShoppingCart";
import UserProductPromoCode from "./UserProductPromoCode";
import UserSessionPromoCode from "./UserSessionPromoCode";

type AppUser = null | {
    id: string;

    firstName: string;
    lastName: string;
    //Relationships
    reviews: Review[];
    shoppingCarts: ShoppingCart[];
    userProductPromoCodes: UserProductPromoCode[];
    userSessionPromoCodes: UserSessionPromoCode[];
 };
 
 export default AppUser