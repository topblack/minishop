import { User } from './user';
import { Product } from './product';

export class Order {
    id: string;
    master: User;
    pName: string;
    pIntro: string;
    pThumbnail: string;
    weight: number;
    payment: number;

    constructor(
        iMaster: User,
        iProduct: Product
    ) {
        this.id = '000';
        this.master = iMaster;
        this.pName = iProduct.name;
        this.pIntro = iProduct.intro;
        this.pThumbnail = iProduct.thumbnail;
        this.weight = 5;
        this.payment = iProduct.unitPrice;
    }
}
