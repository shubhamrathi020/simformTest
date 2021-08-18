import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { USER } from '../util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  registered: boolean = false;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.email],
      contact: ['', Validators.pattern('[1-9]{1}[0-9]{9}')],
      address: [''],
      userName: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  ngOnInit(): void {
  }

  register() {
    console.log(this.registerForm)
    // this.registered=true
    let users = window.localStorage.getItem('users');
    let usersObj = users !== null ? JSON.parse(users) : {};
    let loggingUsername = this.registerForm.controls.userName.value;
    let userExist: USER[] = usersObj.find((user: USER) => {
      return (user.userName == loggingUsername)
    })
    if (userExist) {
      this.registered = false
      console.log('Username already exist. Kindly enter different username.');
    }
    else {
      this.registered = true
      usersObj.push(this.registerForm.value);
      // console.log(usersObj)
      window.localStorage.setItem('users', JSON.stringify(usersObj))
      console.log('Successfully registered. Please login.')
    }
  }

}
