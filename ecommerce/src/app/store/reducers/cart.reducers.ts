import { Actions } from '../actions/cart.actions'
import { ActionTypes } from '../actiontypes'
import { IShoppingCart } from 'src/app/models/ishoppingcart.model'

const initialState: Array<IShoppingCart> = []


export function CartReducer(state = initialState, action: Actions) {

    let _itemIndex

    switch(action.type) {

        case ActionTypes.SHOPPINGCART_ADD:
            state = [...state, action.payload]
            return state
            

        case ActionTypes.SHOPPINGCART_DELETE:
            state = state.filter(item => item.product._id !== action.payload)
            return state
               

        case ActionTypes.SHOPPINGCART_INCREMENT:
            _itemIndex = state.findIndex(item => {return item.product._id === action.payload.product._id})

            return state.map((item, index) => {
                if(_itemIndex !== index)
                    return item
                let itemIncrement = {product: item.product, quantity: item.quantity + 1}                
                    return itemIncrement
            })     


        case ActionTypes.SHOPPINGCART_DECREMENT:
            _itemIndex = state.findIndex(item => {return item.product._id === action.payload.product._id}) 

            return state.map((item, index) => {
                if(_itemIndex !== index)
                    return item
                let itemDecrement = {product: item.product, quantity: item.quantity - 1}
                    return itemDecrement
            })

        case ActionTypes.SHOPPINGCART_CLEAR:
            state = initialState
            return state

        default:
            return state

    }
}

