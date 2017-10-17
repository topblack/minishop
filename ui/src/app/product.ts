import { User } from './user';

export class Product {
  id: string;
  name: string;
  intro: string;
  description: string;
  price: number; // 原价
  unitPrice: number; // 团购价
  unitReq: number;
  masterImg: string;
  thumbnail: string;
  detailImgs: string[];

  constructor(
    iId: string,
    iName: string,
    iIntro: string,
    iDescription: string,
    iPrice: number,
    iWsPrice: number,
    iWsReq: number,
    iMasterImage: string,
    iThumbnail: string,
    iDetailImgs: string[]) {
    this.id = iId;
    this.name = iName;
    this.intro = iIntro;
    this.description = iDescription;
    this.price = iPrice;
    this.unitPrice = iWsPrice;
    this.unitReq = iWsReq;
    this.masterImg = iMasterImage;
    this.thumbnail = iThumbnail;
    this.detailImgs = iDetailImgs;
  }
}
