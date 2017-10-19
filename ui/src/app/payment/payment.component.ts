import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap, Router, Params } from '@angular/router';


import { User } from '../models/user';
import { Order } from '../models/order';
import { UserService } from '../service/user.service';
import { Address } from '../models/address';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  userId: string;
  user: User;
  order: Order;
  address: Address;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    this.route.params.subscribe((params: Params) => this.userId = params['uid']);
    this.userService.getUser(this.userId).then(usr => this.user = usr);
    this.userService.getDefaultAddr(this.userId).then(addr => this.address = addr);
    this.userService.fetchCurOrder(this.userId).then(order => this.order = order);
  }

  ngOnInit() {
  }

  gotoAddrManager(): void {
    this.router.navigate(['/address', this.user.id]);
  }

  cancelOrder(): void {
    this.location.back();
  }
}
