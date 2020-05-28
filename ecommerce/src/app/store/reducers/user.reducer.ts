import { Actions } from '../actions/user.actions'
import { ActionTypes } from '../actiontypes'
import { IUser } from 'src/app/models/iuser.model'

const initialState: IUser = {}

export function UserReducer(state = initialState, action: Actions ) {
    switch(action.type) {
        case ActionTypes.USER_SET:
            state = {
                name: action.payload.user.name,
                email: action.payload.user.email,
                userId: action.payload.user.id,
                token: action.payload.token
            }
            sessionStorage.setItem('currentUserToken', state.token)
            sessionStorage.setItem('currentUserId', state.userId)
            sessionStorage.setItem('userName', state.name)

            return state
        
        case ActionTypes.USER_LOGOUT:
            state = initialState
            sessionStorage.removeItem("currentUserToken")
            sessionStorage.removeItem("currentUserId")
            sessionStorage.removeItem("userName")
            
            return state

        default:
            return state
    }
}

