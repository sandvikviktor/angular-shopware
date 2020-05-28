import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password:['', [Validators.required]]
    })
  }

  get userInlogged() {
    return this.userService.getUserInlogged()
  }

  onSubmit() {
    this.userService.login(this.loginForm.value)

    setTimeout(() => {
      if(this.userInlogged)
         this.router.navigate(['/'])
    }, 1000);

    this.loginForm.reset()
  }
}
