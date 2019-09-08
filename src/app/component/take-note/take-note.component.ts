import { Component, OnInit } from '@angular/core';
import { notes } from "../../model/addNote";
import { NoteServiceService } from "../../services/noteService/note-service.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss']
})
export class TakeNoteComponent implements OnInit {
  public addnoteForm: FormGroup
  constructor(private noteService: NoteServiceService,private snackBar:MatSnackBar) { }

  ngOnInit() {
    this.addnoteForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])

    });
  }
  isOpen = true;
  click() {
    this.isOpen = true;
  }
  onClickClose(value) {
    console.log("the value in form group", this.addnoteForm.value.title);

    this.isOpen = true;
    let notes: notes = {
      title: value.title,
      description: value.description
    }

    console.log("Note is added", notes);
    this.addnoteForm.reset();
    this.noteService.addNote(notes).subscribe(response => {
      console.log(" reponse ", response);
      this.snackBar.open('Note added successfully','',{
        duration:1000
      })

    }, error => {
      console.log(error);

    })

  }
}