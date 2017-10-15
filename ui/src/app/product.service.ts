import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './mock-products';


@Injectable()
export class ProductService {

  // 获取所有产品
  getProducts(): Promise<Product[]> {
    return Promise.resolve(PRODUCTS);
  }

  getProductById(id: number): Promise<Product> {
    return this.getProducts().then(products => products.find(hero => hero.id === id));
  }
}
