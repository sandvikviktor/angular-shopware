import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import * as UserActions from '../store/actions/user.actions'
import { IState } from '../models/istate.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public isLoggedIn
  private _baseUrl:string = 'http://localhost:9999/api/users/'

  constructor(private http: HttpClient, private store: Store<IState>) { }

  register(user) {
    return this.http.post<any>(this._baseUrl + 'register', user)
  }

  login(user) {
    this.http.post<any>(this._baseUrl + 'login', user)
    .subscribe(res => {
      this.store.dispatch(new UserActions.Set(res))
    })
  }

  logout() {
    this.store.dispatch(new UserActions.Logout())
  }

  getUserInlogged() {
    this.isLoggedIn = false

    if (sessionStorage.getItem("currentUserToken") !== null)
      this.isLoggedIn = true

    return this.isLoggedIn
  }
}
