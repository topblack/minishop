import { Injectable } from '@angular/core';
import { User } from './user';
import { Order } from './order';
import { USERS } from './mock-users';

@Injectable()
export class UserService {

  constructor() { }

  getUser(userId: string): Promise<User> {
    return Promise.resolve(USERS[0]);
  }

  getOrders(userId: string): Promise<Order[]> {
    return Promise.resolve([]);
  }
}

