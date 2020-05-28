import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private orderService: OrderService, private store: Store<IState>) { }
  public orders = this.store.select(store => store.orders)
  public userId

  ngOnInit(): void {
    this.userId = sessionStorage.getItem("currentUserId")
    this.orderService.getOrdersById(this.userId)
  }


}
