import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/models/iproduct.model';
import { IState } from 'src/app/models/istate.model';
import { Store } from '@ngrx/store';
// import { ProductCardComponent } from '../product-card/product-card.component'

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {

  public productcatalog: Observable<Array<IProduct>>

  constructor(private store: Store<IState>) { }

  ngOnInit(): void {
    this.productcatalog = this.store.select(store => store.productcatalog)
  }

  // addToCart(product, quantity = 1) {

  // }
}
