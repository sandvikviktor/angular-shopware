import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { IShoppingCart } from 'src/app/models/ishoppingcart.model';

@Component({
  selector: 'app-shopping-cart-product',
  templateUrl: './shopping-cart-product.component.html',
  styleUrls: ['./shopping-cart-product.component.css']
})
export class ShoppingCartProductComponent implements OnInit {

  @Input() item: IShoppingCart
  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    // console.log(this.item)
  }

  deleteFromCart(id) {
    this.shoppingCartService.delete(id)
  }

  cartIncrement(item) {
    this.shoppingCartService.cartIncrement(item)
  }

  cartDecrement(item) {
    this.shoppingCartService.cartDecrement(item)
  }
}
