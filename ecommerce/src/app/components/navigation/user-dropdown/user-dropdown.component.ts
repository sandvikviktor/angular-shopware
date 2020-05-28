import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.css']
})
export class UserDropdownComponent {

  constructor(private userService: UserService, private store: Store<IState>) { }

  get userInlogged() {
    return this.userService.getUserInlogged()
  }

  userLogout(){
    this.userService.logout()
  }

}
