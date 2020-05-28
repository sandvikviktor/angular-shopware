import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { IState } from 'src/app/models/istate.model';
import { Store } from '@ngrx/store';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-checkout-view',
  templateUrl: './checkout-view.component.html',
  styleUrls: ['./checkout-view.component.css']
})
export class CheckoutViewComponent implements OnInit {

  constructor(private userService: UserService, private shoppingCartService: ShoppingCartService, private orderService: OrderService, private store: Store<IState>) { }

  public shoppingcart = this.store.select(store => store.shoppingcart)


  ngOnInit(): void {
    // console.log(this.shoppingcart)
  }

  checkout() {
     this.shoppingcart.subscribe(res => {

       const order = {
          userId: sessionStorage.getItem("currentUserId"),
          userName: sessionStorage.getItem("userName"),
          order: res,
          total: this.shoppingCartTotal,
          status: 'pending'
       }

       this.orderService.saveOrder(order)
      //  setTimeout(() => this.shoppingCartService.clearCart(), 2000)
      // this.shoppingCartService.clearCart()
     })
  }

  get userInlogged() {
    return this.userService.getUserInlogged()
  }

  get shoppingCartTotal() {
    return this.shoppingCartService.getTotalAmount()
  }

}
