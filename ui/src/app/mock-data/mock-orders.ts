import { PRODUCTS } from './mock-products';
import { Order } from '../models/order';
import { USERS } from './mock-users';

export const ORDERS: Order[] = [
    new Order(USERS[0], PRODUCTS[0]),
    new Order(USERS[0], PRODUCTS[1]),
    new Order(USERS[0], PRODUCTS[2]),
    new Order(USERS[0], PRODUCTS[3]),
    new Order(USERS[0], PRODUCTS[4]),
    new Order(USERS[0], PRODUCTS[5])
];

