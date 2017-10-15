import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PopupComponent } from 'ngx-weui/popup';


import { Product } from '../product';
import { Order } from '../order';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ProductComponent implements OnInit {

  @ViewChild('paymentPop') paymentPop: PopupComponent;
  product: Product;
  _addressBarstatus = false;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.productService.getProductById(+params.get('id')))
      .subscribe(product => this.product = product);
  }

  gotoHome(selection: string): void {
    this.router.navigate(['/shopwindow', selection]);
  }

  cancelOrder(): void {
    this.paymentPop.hide();
  }

  addressBarOpened(): void {
    this._addressBarstatus = !this._addressBarstatus;
  }
}
