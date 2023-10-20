import ProductPromoCode from "../product-models/ProductPromoCode";
import AppUser from "./AppUser";

type UserProductPromoCode = null | {
    userId: string;
    productPromoCodeId: string;

    usageDate: Date;
    //Relationships
    user: AppUser;
    productPromoCode: ProductPromoCode;
 };
 
 export default UserProductPromoCode