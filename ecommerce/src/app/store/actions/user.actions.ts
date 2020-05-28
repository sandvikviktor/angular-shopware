import { Action } from '@ngrx/store'
import { ActionTypes } from '../actiontypes'

export class Set implements Action {
    public readonly type = ActionTypes.USER_SET
    constructor(public payload: any) {}
}

export class Logout implements Action {
    public readonly type = ActionTypes.USER_LOGOUT
    constructor() {}
}

export type Actions = Set | Logout