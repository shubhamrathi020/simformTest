import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from 'src/app/util';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.less']
})
export class NoteListComponent implements OnInit {

  @Input() note: any;
  @Output() noteDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() saveNote: EventEmitter<Note> = new EventEmitter<Note>();
  @Output() viewNote: EventEmitter<Note> = new EventEmitter<Note>();

  isEditable: boolean = false;
  isView: boolean = false;
  emptyHeaderSave: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    let loggedInUser = window.localStorage.getItem('userLoggedIn');
    if (!loggedInUser) {
      this.router.navigate(['login']);
    }
  }

  deleteNote(id: number) {
    this.noteDelete.emit(id);
  }

  saveEditedNote(heading: string, desc: string) {
    if (heading == "") {
      this.emptyHeaderSave = true;
    }
    else {
      this.isEditable = false;
      this.emptyHeaderSave = false;
      this.note.title = heading;
      this.note.description = desc;
      this.saveNote.emit(this.note)
    }
  }

  viewselectedNote() {
    this.viewNote.emit(this.note);
  }

}
