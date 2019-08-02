import { Component, OnInit } from '@angular/core';
import { notes } from "../../model/addNote";
import { NoteServiceService } from "../../services/noteService/note-service.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss']
})
export class TakeNoteComponent implements OnInit {
  public addnoteForm: FormGroup
  constructor(private noteService: NoteServiceService) { }

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

    }, error => {
      console.log(error);

    })

  }
}