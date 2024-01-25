import SessionPromoCode from "../session-models/SessionPromoCode";
import AppUser from "./AppUser";

type UserSessionPromoCode = null | {
    userId: string;
    sessionPromoCodeId: string;

    usageDate: Date;
    //Relationships
    user: AppUser;
    sessionPromoCode: SessionPromoCode;
 };
 
 export default UserSessionPromoCode