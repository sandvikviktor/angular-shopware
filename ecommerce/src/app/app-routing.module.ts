import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCatalogViewComponent } from './views/product-catalog-view/product-catalog-view.component';
import { ProductViewComponent } from './views/product-view/product-view.component';
import { RegisterComponent } from './views/forms/register/register.component';
import { LoginComponent } from './views/forms/login/login.component';
import { AccountComponent } from './views/user/account/account.component';
import { OrdersComponent } from './views/user/orders/orders.component';
import { CheckoutViewComponent } from './views/checkout-view/checkout-view.component';


const routes: Routes = [
  { path: '', component: ProductCatalogViewComponent },
  { path: 'products', component: ProductCatalogViewComponent },
  { path: 'products/:id', component: ProductViewComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'account', component: AccountComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'checkout', component: CheckoutViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
