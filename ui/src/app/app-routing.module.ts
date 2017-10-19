import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShopwindowComponent } from './shopwindow/shopwindow.component';
import { ProductComponent } from './product/product.component';
import { AddrManagerComponent } from './addr-manager/addr-manager.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
    { path: '', redirectTo: '/shopwindow/products', pathMatch: 'full' },
    { path: 'shopwindow/:content', component: ShopwindowComponent },
    { path: 'detail/:pid', component: ProductComponent },
    { path: 'payment/:uid', component: PaymentComponent },
    { path: 'address/:uid', component: AddrManagerComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

