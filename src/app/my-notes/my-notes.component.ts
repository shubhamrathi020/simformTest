import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note, USER } from '../util';

@Component({
  selector: 'app-my-notes',
  templateUrl: './my-notes.component.html',
  styleUrls: ['./my-notes.component.less']
})
export class MyNotesComponent implements OnInit {

  loggedInUserDetail: any;
  usersObj: any;
  isAddNote: boolean = false;
  isViewMode: boolean = false;
  selectedNote: any;
  emptyHeaderSave: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    let loggedInUser = window.localStorage.getItem('userLoggedIn');
    if (!loggedInUser) {
      this.router.navigate(['login']);
    }
    else {
      let users = window.localStorage.getItem('users');
      this.usersObj = users !== null ? JSON.parse(users) : {};
      this.loggedInUserDetail = this.usersObj.find((user: USER) => user.userName == loggedInUser)
    }
  }

  addNote(heading: string, desc: string) {
    if (heading == "") {
      this.emptyHeaderSave = true;
    }
    else {
      this.emptyHeaderSave = false;
      let length = this.loggedInUserDetail.notes ? this.loggedInUserDetail.notes.length : 0;
      let id: number = length != 0 ? this.loggedInUserDetail.notes[length - 1].id : 0;
      this.isAddNote = false;
      let newNote: Note = {
        id: id + 1,
        title: heading,
        description: desc
      }
      this.usersObj.forEach((user: USER) => {
        if (user.userName === this.loggedInUserDetail.userName) {
          user['notes'].push(newNote)
        }
      });
      window.localStorage.setItem('users', JSON.stringify(this.usersObj))
    }

  }

  noteDelete(id: number) {
    let notes = this.loggedInUserDetail.notes;
    notes = notes.filter((notes: Note) => notes.id != id);
    this.usersObj.forEach((user: USER) => {
      if (user.userName === this.loggedInUserDetail.userName) {
        user.notes = notes
      }
    });
    window.localStorage.setItem('users', JSON.stringify(this.usersObj))
  }

  saveNote(editedNote: Note) {
    let notes = this.loggedInUserDetail.notes;
    notes.forEach((note: Note) => {
      if (note.id === this.loggedInUserDetail.userName) {
        note = editedNote
      }
    });
    this.usersObj.forEach((user: USER) => {
      if (user.userName === this.loggedInUserDetail.userName) {
        user.notes = notes
      }
    });
    window.localStorage.setItem('users', JSON.stringify(this.usersObj))
  }

  viewNote(note: Note) {
    this.isViewMode = true;
    this.selectedNote = note
  }

}
