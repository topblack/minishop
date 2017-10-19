import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { PopupComponent } from 'ngx-weui/popup';


import { Product } from '../models/product';
import { Order } from '../models/order';
import { User } from '../models/user';
import { ProductService } from '../service/product.service';

import 'rxjs/add/operator/switchMap';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ProductComponent implements OnInit {
  product: Product;
  user: User;

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.productService.getProductById(params.get('pid')))
      .subscribe(product => this.product = product);
  }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  gotoAccount(): void {
    this.router.navigate(['/shopwindow', 'account']);
  }

  shopNow(): void {
    this.userService.initOrder('001', this.product);
    this.router.navigate(['/payment', '001']);
  }
}
