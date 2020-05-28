import { Injectable, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from '../models/istate.model';
import * as ShoppingCartActions from '../store/actions/cart.actions'

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService implements OnInit{


  private cart
  public totalAmount
  public totalQuantity

  constructor(private store: Store<IState>) { }

  ngOnInit(): void {
    
  }

  add(product, quantity) {  
    this.store.select(store => store.shoppingcart).subscribe(res => this.cart = res)    
    let exists = this.cart.find(p => {return p.product._id === product._id})

    if (!exists)      
      this.store.dispatch(new ShoppingCartActions.Add({product, quantity}))
    else
      this.cartIncrement({product, quantity})
  }

  delete(id) {
    this.store.dispatch(new ShoppingCartActions.Delete(id))
  }

  cartIncrement(item) {
    this.store.dispatch(new ShoppingCartActions.Increment(item))
  }

  cartDecrement(item) {
    if(item.quantity <= 1) {
      this.delete(item.product._id)
    }      
    this.store.dispatch(new ShoppingCartActions.Decrement(item))
  }

  clearCart() {
    this.store.dispatch(new ShoppingCartActions.Clear())
  }

  getTotalQuantity() {
    this.totalQuantity = 0
    this.store.select(store => store.shoppingcart).subscribe(res => {
      if(res.length > 0)
        res.forEach(item => {
          this.totalQuantity += item.quantity
        })
    })
    return this.totalQuantity
  }

  getTotalAmount() {
    this.totalAmount = 0        
    this.store.select(store => store.shoppingcart).subscribe(res => {
      if (res.length > 0)
        res.forEach(item => {
          this.totalAmount += item.product.price * item.quantity
        })        
    })
    return this.totalAmount
  }



}
