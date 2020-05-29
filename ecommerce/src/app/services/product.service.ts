import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import * as ProductActions from '../store/actions/product.actions'

@Injectable({
  providedIn: 'root'
})
export class ProductService  {

  private _baseUrl:string = 'http://localhost:9999/api/products/'

  constructor(private http: HttpClient, private store: Store) { }

  getById(id) {
    this.http.get<any>(this._baseUrl + id).subscribe(
      res => this.store.dispatch(new ProductActions.Set(res.product))
    )
  }

  clear() {
    this.store.dispatch(new ProductActions.Clear())
  }
}
