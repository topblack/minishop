import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WeUiModule } from 'ngx-weui';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './service/product.service';
import { UserService } from './service/user.service';
import { ShopwindowComponent } from './shopwindow/shopwindow.component';

import { AppRoutingModule } from './app-routing.module';
import { AddrManagerComponent } from './addr-manager/addr-manager.component';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ShopwindowComponent,
    AddrManagerComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    WeUiModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    ProductService,
    UserService
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
