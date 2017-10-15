import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WeUiModule } from 'ngx-weui';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product.service';
import { ShopwindowComponent } from './shopwindow/shopwindow.component';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ShopwindowComponent,
  ],
  imports: [
    BrowserModule,
    WeUiModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    ProductService
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
