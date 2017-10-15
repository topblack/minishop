import { Injectable } from '@angular/core';
import { User } from './user';
import { Order } from './order';
import { USERS } from './mock-users';
import { PRODUCTS } from './mock-products';
import { ORDERS } from './mock-orders';

@Injectable()
export class UserService {

  constructor() { }

  getUser(userId: string): Promise<User> {
    return Promise.resolve(USERS[0]);
  }

  getOrders(userId: string): Promise<Order[]> {
    return Promise.resolve(ORDERS);
  }
}

