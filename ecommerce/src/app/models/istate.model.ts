import { IProduct } from './iproduct.model';
import { IShoppingCart } from './ishoppingcart.model';
import { IUser } from './iuser.model';
import { IOrder } from './iorder.model';

export interface IState {
    readonly productcatalog: Array<IProduct>
    readonly product: IProduct
    readonly shoppingcart: Array<IShoppingCart>
    readonly user: IUser
    readonly orders: Array<IOrder>
}