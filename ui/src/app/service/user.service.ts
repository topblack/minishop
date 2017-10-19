import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Order } from '../models/order';
import { USERS } from '../mock-data/mock-users';
import { PRODUCTS } from '../mock-data/mock-products';
import { ORDERS } from '../mock-data/mock-orders';
import { Address } from '../models/address';
import { Product } from '../models/product';

@Injectable()
export class UserService {
  // 获取用户收货地址的步进器
  private addrStepper = 6;

  addrList: Address[];
  addrInUse: Address;
  curOrder: Order;

  constructor() {
    this.addrList = [new Address('001', '张三', '13548977604', true, '', '上海市', '浦东新区', '荷泽路828弄6号601市'),
    new Address('002', '李四', '13548974604', false, '四川省', '成都市', '武侯区', '荷泽路828弄6号601市'),
    new Address('003', '王麻子', '13546977604', false, '', '上海市', '浦东新区', '荷泽路828弄6号601市')];
    this.addrInUse = undefined;
  }

  // 通过用户id获取用户信息
  getUser(userId: string): Promise<User> {
    return Promise.resolve(USERS.find(user => user.id === userId));
  }

  // -----------------------------------------------------------------------------------------------
  // ---------------------------------------Address Access--------------------------------------------
  // -----------------------------------------------------------------------------------------------
  getAddrInUse(): Promise<Address> {
    return Promise.resolve(this.addrInUse);
  }

  setAddrInUse(addr: Address): void {
    this.addrInUse = addr;
  }

  // 获取用户的默认收货地址
  getDefaultAddr(userId: string): Promise<Address> {
    return Promise.resolve(this.addrList.find(addr => addr.asDefault === true));
  }

  // 获取用户收货地址的总量
  getAddrVariety(): number {
    return this.addrList.length;
  }

  // 获取 addrStepper * counter 数量的用户的收货地址列表
  getAddrList(userId: string, counter: number): Promise<Address[]> {
    const len = Math.min(this.addrStepper * counter, this.getAddrVariety());
    const addrs = new Array(len);

    for (let i = 0; i < len; i++) {
      addrs[i] = this.addrList[i];
    }

    return Promise.resolve(addrs);
  }


  // 编辑或者添加用户收货地址
  editAddr(newAddr: Address): void {
    const trash = this.addrList.find(addr => addr.id === newAddr.id);
    if (trash === undefined) {
      if (newAddr.asDefault) {
        this.clearDefaultFlag();
      }
      this.addrList.push(newAddr);
    } else {
      // const index = this.addrList.indexOf(trash);
      // if (index > -1) {
      //   this.addrList.splice(index, 1, newAddr);
      // }
    }
  }

  // 删除用户收货地址
  deleteAddr(trashAddr: Address): void {
    const index = this.addrList.indexOf(trashAddr);
    if (index > -1) {
      this.addrList.splice(index, 1);
    }
  }

  // 清除原有默认地址标签
  clearDefaultFlag(): void {
    const oldDefault = this.addrList.find(addr => addr.asDefault === true);
    if (oldDefault !== undefined) {
      oldDefault.setAsDefault(false);
    }
  }

  // 获取用户相关的订单
  getOrders(userId: string): Promise<Order[]> {
    return Promise.resolve(ORDERS);
  }

  // -----------------------------------------------------------------------------------------------
  // ---------------------------------------Order Access--------------------------------------------
  // -----------------------------------------------------------------------------------------------
  initOrder(usrId: string, product: Product) {
    this.curOrder = new Order(USERS.find(usr => usr.id === usrId), product);
  }

  fetchCurOrder(userId: string): Promise<Order> {
    return Promise.resolve(this.curOrder);
  }
}

