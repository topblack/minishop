import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';
import { TabModule } from 'ngx-weui/tab';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { InfiniteLoaderComponent } from 'ngx-weui/infiniteloader';

@Component({
  selector: 'app-shopwindow',
  templateUrl: './shopwindow.component.html',
  styleUrls: ['./shopwindow.component.css'],
  providers: [ProductService],
  encapsulation: ViewEncapsulation.None
})

export class ShopwindowComponent implements OnInit {

  products: Product[];
  variety: number;
  counter = 1;

  // the default selected tab index, 0 for main page, 1 for accout page
  activeTab: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.variety = this.productService.getProductVariety();
    this.getProducts();
    this.activeTab = 'products';
    this.route.params.subscribe((params: Params) => this.activeTab = params['content']);
  }

  getProducts() {
    this.productService.getProducts(this.counter).then(allProducts => this.products = allProducts);
  }

  gotoDetail(product: Product): void {
    this.router.navigate(['/detail', product.id]);
  }

  onSelect() {
  }

  onLoadMore(comp: InfiniteLoaderComponent) {
    Observable.timer(1500).subscribe(() => {
      this.counter++;
      this.getProducts();
      if (this.products.length === this.variety) {
        comp.setFinished();
        return;
      }
      comp.resolveLoading();
    });
  }
}
