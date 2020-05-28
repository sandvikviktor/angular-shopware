import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.model';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService, private store: Store<IState>) { }  

  public shoppingcart = this.store.select(store => store.shoppingcart)
  
  ngOnInit(): void {
    // this.shoppingcart = this.store.select(store => store.shoppingcart)
  }

  get totalAmount() {
    return this.shoppingCartService.getTotalAmount()
  }
}
