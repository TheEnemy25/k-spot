import Product from "../product-models/Product";
import Session from "../session-models/Session";

type Discount = null | {
    id: string;

    name: string;
    description: string;
    amount: number;
    startDate:Date;
    endDate:Date;
    //Relationships
    sessions: Session[];
    products: Product[];
};

export default Discount