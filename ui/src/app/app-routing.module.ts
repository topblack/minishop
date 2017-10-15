import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShopwindowComponent } from './shopwindow/shopwindow.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
    { path: '', redirectTo: '/shopwindow/account', pathMatch: 'full' },
    { path: 'shopwindow/:content', component: ShopwindowComponent },
    { path: 'detail/:id', component: ProductComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

