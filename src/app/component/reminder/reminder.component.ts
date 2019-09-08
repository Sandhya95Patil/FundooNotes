import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from "../../services/noteService/note-service.service";

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {
notes=[];
labels:boolean
  constructor(private noteService:NoteServiceService) { }

  ngOnInit() {
    var reminderNoteList=this.reminderNoteList();
console.log('reminder note list',reminderNoteList)
  }
  /*** @description: This method is for reminder note list */
  reminderNoteList() {
    try {
     
      this.noteService.getReminderNotesList().subscribe(response => {
        console.log('response ', response['data'].data);
        this.notes = response['data'].data
        this.notes.reverse();
        if (this.notes.length > 0) {
          this.labels = false
        } else {
          this.labels = true
        }
        
      }, error => {
        console.log('error ', error);

      })
    } catch (error) {
      console.log(error);

    }

  }
}
