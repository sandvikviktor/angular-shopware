import { Component, OnInit, Input } from '@angular/core';
import { IShoppingCart } from 'src/app/models/ishoppingcart.model';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-checkout-product',
  templateUrl: './checkout-product.component.html',
  styleUrls: ['./checkout-product.component.css']
})
export class CheckoutProductComponent implements OnInit {
  
  @Input() item
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
