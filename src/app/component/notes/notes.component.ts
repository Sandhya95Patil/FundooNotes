import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { NoteServiceService } from "../../services/noteService/note-service.service";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  allNotes=[];
 
  constructor(private noteService:NoteServiceService) { }

  ngOnInit() {
    this.getNotes();
    console.log('getnotes')
  }
  
  getNotes(){
   this.noteService.getNote().subscribe(response=>{
     console.log('response',response);
     this.allNotes=response['data'].data
   },error=>{
     console.log(error);
   })
   
   }
   changecolor(event){
console.log('event in notes',event);

   }
  
  }



