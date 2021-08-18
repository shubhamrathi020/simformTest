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
  }

  Login() {
    this.router.navigate(['login']);
  }
}
