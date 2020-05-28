import { IShoppingCart } from './ishoppingcart.model';

export interface IOrder {
    _id?: string
    userId?: string
    userName?: string
    order?: IShoppingCart
    total?: number
    status?: string
}