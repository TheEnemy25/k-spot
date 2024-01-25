import Discount from "../discount-models/Discount";
import ShoppingCartItem from "../shopping-cart-models/ShoppingCartItem";
import ProductPromoCode from "./ProductPromoCode";

type Product = null | {
    id: string;
    discountId: string;

    name: string;
    image: string;
    description: string;
    price: number;
    //Relationships
    discount: Discount;
    productPromoCodes: ProductPromoCode[];
    shoppingCartItems: ShoppingCartItem[];
 };
 
 export default Product