import { User } from './user';

export class Product {
  id: number;
  name: string;
  intro: string;
  description: string;
  price: number; // 原价
  wsPrice: number; // 团购价
  wsReq: number;
  masterImg: string;
  thumbnail: string;
  detailImgs: Array<string>;

  constructor(
    iId: number,
    iName: string,
    iIntro: string,
    iDescription: string,
    iPrice: number,
    iWsPrice: number,
    iWsReq: number,
    iMasterImage: string,
    iThumbnail: string,
    iDetailImgs: Array<string>) {
    this.id = iId;
    this.name = iName;
    this.intro = iIntro;
    this.description = iDescription;
    this.price = iPrice;
    this.wsPrice = iWsPrice;
    this.wsReq = iWsReq;
    this.masterImg = iMasterImage;
    this.thumbnail = iThumbnail;
    this.detailImgs = iDetailImgs;
  }
}
