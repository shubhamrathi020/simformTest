import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { USER, users } from './util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'myNotes';
  users: USER[] = users
  loggedIn: boolean = false;

  constructor(private router: Router) {
    window.localStorage.setItem('users', JSON.stringify(this.users))
    window.localStorage.setItem('userLoggedIn', '')
  }

  ngOnInit(): void {
    if (window.localStorage.getItem('userLoggedIn') != "") {
      console.log(window.localStorage.getItem('userLoggedIn'))
      this.loggedIn = true
    }
    else {
      this.loggedIn = false
    }
  }

  Login() {
    if (window.localStorage.getItem('userLoggedIn') != "") {
      window.localStorage.setItem('userLoggedIn', '')
    }
    else {
      // window.localStorage.setItem('userLoggedIn','T')
    }
    this.router.navigate(['login']);
  }
}
