import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-orders-product',
  templateUrl: './orders-product.component.html',
  styleUrls: ['./orders-product.component.css']
})
export class OrdersProductComponent implements OnInit {

  @Input() order
  constructor() { }

  ngOnInit(): void {
    // console.log(this.order)
  }

}
