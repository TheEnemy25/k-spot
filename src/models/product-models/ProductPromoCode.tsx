import UserProductPromoCode from "../user-models/UserProductPromoCode";
import Product from "./Product";

type ProductPromoCode = null | {
    id: string;
    productId: string;

    promoCode: string;
    discountPercentage: number;
    maxUsageCount: number;
    //Relationships
    product: Product;
    userProductPromoCodes: UserProductPromoCode[];
 };
 
 export default ProductPromoCode