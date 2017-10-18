import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  product: Product;

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

  gotoAddrManager(): void {
    this.router.navigate(['/address', '001']);
  }

  cancelOrder(): void {
    this.location.back();
  }
}
