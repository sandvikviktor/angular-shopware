import { Actions } from '../actions/order.actions'
import { ActionTypes } from '../actiontypes'
// import { IShoppingCart } from 'src/app/models/ishoppingcart.model'
import { IOrder } from 'src/app/models/iorder.model'

const initialState: Array<IOrder> = []

export function OrderReducer(state = initialState, action: Actions) {
    switch(action.type) {
        case ActionTypes.ORDER_SET:
            state = action.payload
            return state
    }
}