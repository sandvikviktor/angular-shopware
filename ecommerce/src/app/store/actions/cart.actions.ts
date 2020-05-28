import { Action } from '@ngrx/store'
import { ActionTypes } from '../actiontypes'
import { IShoppingCart } from 'src/app/models/ishoppingcart.model'
import { IProduct } from 'src/app/models/iproduct.model'

export class Add implements Action {
    public readonly type = ActionTypes.SHOPPINGCART_ADD
    constructor(public payload: IShoppingCart) {}
}

export class Delete implements Action {
    public readonly type = ActionTypes.SHOPPINGCART_DELETE
    constructor(public payload: string){}
}

export class Increment implements Action {
    public readonly type = ActionTypes.SHOPPINGCART_INCREMENT
    constructor(public payload: IShoppingCart){}
}

export class Decrement implements Action {
    public readonly type = ActionTypes.SHOPPINGCART_DECREMENT
    constructor(public payload: IShoppingCart){}
}

export class Clear implements Action {
    public readonly type = ActionTypes.SHOPPINGCART_CLEAR
    constructor() {}
}

export type Actions = Add | Delete | Increment | Decrement | Clear