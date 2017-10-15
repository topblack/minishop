import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './mock-products';


@Injectable()
export class ProductService {
  private stepper = 4;

  // 获取当前在售商品种类数
  getProductVariety() {
    return PRODUCTS.length;
  }

  // 获取所有产品
  getAllProducts(): Promise<Product[]> {
    return Promise.resolve(PRODUCTS);
  }

  // 获取 4倍于counter 的产品数量
  getProducts(counter: number): Promise<Product[]> {
    const len = Math.min(this.stepper * counter, this.getProductVariety());
    const products = new Array(len);

    for (let i = 0; i < len; i++) {
      products[i] = PRODUCTS[i];
      console.log(products[i]);
    }

    return Promise.resolve(products);
  }

  getProductById(id: number): Promise<Product> {
    return this.getAllProducts().then(products => products.find(hero => hero.id === id));
  }
}
