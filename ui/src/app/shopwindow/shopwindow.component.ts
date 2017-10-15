import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TabModule } from 'ngx-weui/tab';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-shopwindow',
  templateUrl: './shopwindow.component.html',
  styleUrls: ['./shopwindow.component.css'],
  providers: [ProductService],
  encapsulation: ViewEncapsulation.None
})

export class ShopwindowComponent implements OnInit {

  products: Product[];

  // the default selected tab index, 0 for main page, 1 for accout page
  activeTab: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.getProducts();
    this.activeTab = 'products';
    this.route.params.subscribe((params: Params) => this.activeTab = params['content']);
  }

  getProducts() {
    this.productService.getProducts().then(allProducts => this.products = allProducts);
  }

  gotoDetail(product: Product): void {
    this.router.navigate(['/detail', product.id]);
  }
}
