import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Order } from '../models/order';
import { USERS } from '../mock-data/mock-users';
import { PRODUCTS } from '../mock-data/mock-products';
import { ORDERS } from '../mock-data/mock-orders';
import { Address } from '../models/address';

@Injectable()
export class UserService {

  constructor() { }

  getUser(userId: string): Promise<User> {
    const addr = new Address('张三', '13548977604', true, '', '上海市', '浦东新区', '荷泽路828弄6号601市');
    const usr = USERS.find(user => user.id === userId);
    usr.addAddress(addr);
    return Promise.resolve(usr);
  }

  getOrders(userId: string): Promise<Order[]> {
    return Promise.resolve(ORDERS);
  }
}

