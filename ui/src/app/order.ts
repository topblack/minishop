import { User } from './user';
import { Product } from './product';

export class Order {
    id: string;
    master: User;
    members: Array<User>;
    product: Product;

    constructor(
        iMaster: User,
        iProduct: Product
    ) {
        this.master = iMaster;
        this.product = iProduct;
        this.members = new Array();
    }

    /**
     * addMember
     *
     */
    public addMember(member: User) {
        this.members.push(member);
    }

    /**
     * Check if this whole sale ready to go.
     */
    public isFullfilled(): boolean {
        return this.members.length === this.product.wsReq;
    }
}
