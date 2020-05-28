import { Component } from '@angular/core';
import { ShoppingCartService } from '../../../services/shopping-cart.service'
import { IShoppingCart } from 'src/app/models/ishoppingcart.model';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private shoppingCartService: ShoppingCartService, private store: Store<IState>) { }

  get totalQuantity() {
    return this.shoppingCartService.getTotalQuantity()
  }
}
