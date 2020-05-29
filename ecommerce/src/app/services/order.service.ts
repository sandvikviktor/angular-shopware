import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { IState } from '../models/istate.model';
import * as OrderActions from '../store/actions/order.actions'

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private _baseUrl:string = 'http://localhost:9999/api/orders/'

  constructor(private http: HttpClient, private store: Store<IState>) { }
  
  saveOrder(order) {
    return this.http.post<any>(this._baseUrl + 'saveorder', { userId: order.userId, userName: order.userName, order: order.order, total: order.total, status: order.status }).subscribe(res => console.log(res))
  }

  getOrdersById(userId) {
    return this.http.get<any>(this._baseUrl + 'getorders/' + userId).subscribe(res => {
      this.store.dispatch(new OrderActions.Set(res))
    })
  }
}
