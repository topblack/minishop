import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { PopupComponent } from 'ngx-weui/popup';


import { Product } from '../product';
import { Order } from '../order';
import { ProductService } from '../product.service';

import 'rxjs/add/operator/switchMap';
import { User } from '../user';

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

  shopNow(): void {
    this.router.navigate(['/payment', this.product.id]);
  }
}
