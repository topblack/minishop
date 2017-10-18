import { Component, ViewEncapsulation } from '@angular/core';
import { TabModule } from 'ngx-weui/tab';
import { Product } from './models/product';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'Me 拼团';


  constructor(private productService: ProductService) { }

}
