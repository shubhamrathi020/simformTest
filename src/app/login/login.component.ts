import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { USER } from '../util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginError: boolean = false;
  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  ngOnInit(): void {
  }

  login() {
    let users = window.localStorage.getItem('users');
    let usersObj = users !== null ? JSON.parse(users) : {};
    let loggingUsername = this.loginForm.controls.userName.value;
    let loggingpassword = this.loginForm.controls.password.value;
    let userExist: USER[] = usersObj.find((user: USER) => {
      return (user.userName == loggingUsername && user.password == loggingpassword)
    })
    if (userExist) {
      this.loginError = false;
      window.localStorage.setItem('userLoggedIn', loggingUsername)
      this.router.navigate(['myNotes'])
    }
    else {
      this.loginError = true;
    }
  }

}
