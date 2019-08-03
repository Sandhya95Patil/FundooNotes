import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { NoteServiceService } from "../../services/noteService/note-service.service";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
   parentMessage=[];
 
  constructor(private noteService:NoteServiceService) { }

  ngOnInit() {
    this.getNotes();
    console.log('getnotes')
  }
  getNotes(){
   this.noteService.getNote().subscribe(response=>{
     console.log('response',response);
     this.parentMessage=response['data'].data
   },error=>{
     console.log(error);
   })
   
   }
  
  }



