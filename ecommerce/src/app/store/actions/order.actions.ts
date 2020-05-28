import { Action } from '@ngrx/store'
import { ActionTypes } from '../actiontypes'
import { IOrder } from 'src/app/models/iorder.model'

export class Set implements Action {
    public readonly type = ActionTypes.ORDER_SET
    constructor(public payload: Array<IOrder>) {}
}

export type Actions = Set