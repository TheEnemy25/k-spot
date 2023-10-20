import UserSessionPromoCode from "../user-models/UserSessionPromoCode";
import Session from "./Session";

type SessionPromoCode = null | {
    id: string;
    sessionId: string;

    promoCode: string;
    discountPercentage: number;
    maxUsageCount: number;
    //Relationships
    session: Session;
    userSessionPromoCodes: UserSessionPromoCode[];
 };
 
 export default SessionPromoCode