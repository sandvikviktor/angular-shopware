import { Component } from '@angular/core';
import { ShoppingCartService } from '../../../services/shopping-cart.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  constructor(private shoppingCartService: ShoppingCartService) { }

  get totalQuantity() {
    return this.shoppingCartService.getTotalQuantity()
  }
}
