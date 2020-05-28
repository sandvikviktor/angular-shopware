import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http'
import { ProductCatalogViewComponent } from './views/product-catalog-view/product-catalog-view.component';
import { ProductViewComponent } from './views/product-view/product-view.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { ProductCatalogReducer } from './store/reducers/product-catalog.reducers';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductReducer } from './store/reducers/product.reducers';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { CartReducer } from './store/reducers/cart.reducers';
import { ShoppingCartComponent } from './components/shoppingcart/shopping-cart/shopping-cart.component';
import { ShoppingCartProductComponent } from './components/shoppingcart/shopping-cart-product/shopping-cart-product.component';
import { UserDropdownComponent } from './components/navigation/user-dropdown/user-dropdown.component';
import { RegisterComponent } from './views/forms/register/register.component';
import { LoginComponent } from './views/forms/login/login.component';
import { UserReducer } from './store/reducers/user.reducer';
import { OrdersComponent } from './views/user/orders/orders.component';
import { AccountComponent } from './views/user/account/account.component';
import { CheckoutViewComponent } from './views/checkout-view/checkout-view.component';
import { CheckoutProductComponent } from './components/checkout-product/checkout-product.component';
import { OrderReducer } from './store/reducers/order.reducers';
import { OrdersProductComponent } from './components/orders-product/orders-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCatalogViewComponent,
    ProductViewComponent,
    ProductGridComponent,
    ProductCardComponent,
    NavbarComponent,
    ShoppingCartComponent,
    ShoppingCartProductComponent,
    UserDropdownComponent,
    RegisterComponent,
    LoginComponent,
    OrdersComponent,
    AccountComponent,
    CheckoutViewComponent,
    CheckoutProductComponent,
    OrdersProductComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,    
    HttpClientModule,
    StoreModule.forRoot({
      productcatalog: ProductCatalogReducer,
      product: ProductReducer,
      shoppingcart: CartReducer,
      user: UserReducer,
      orders: OrderReducer
    }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
