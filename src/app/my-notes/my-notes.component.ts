import { Component, OnInit } from '@angular/core';
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
  isViewMode:boolean=false;
  selectedNote:any;
  constructor() { }

  ngOnInit(): void {
    let loggedInUser = window.localStorage.getItem('userLoggedIn');
    let users = window.localStorage.getItem('users');
    this.usersObj = users !== null ? JSON.parse(users) : {};
    this.loggedInUserDetail = this.usersObj.find((user: USER) => user.userName == loggedInUser)
  }

  addNote(heading: string, desc: string) {
    // console.log(heading, desc)
    let id:number = this.loggedInUserDetail.notes.length;
    this.isAddNote = false;
    let newNote:Note = {
      id:id,
      title:heading,
      description:desc
    }
    this.usersObj.forEach((user: USER) => {
      if (user.userName === this.loggedInUserDetail.userName) {
        user.notes?.push(newNote)
      }
    });
    window.localStorage.setItem('users', JSON.stringify(this.usersObj))

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

  viewNote(note:Note){
    console.log(note)
    this.isViewMode = true;
    this.selectedNote = note
  }

}
