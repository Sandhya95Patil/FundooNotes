import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from "../../services/noteService/note-service.service";

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
notes=[];
pinedArray=[];
unpinedArray=[];
  constructor(private noteService:NoteServiceService) { }

  ngOnInit() {
    this.getTrashNotes();
  }
getTrashNotes(){
  try{
    this.noteService.getTrashNoteList().subscribe(response=>{
      this.notes=response['data'].data;
      console.log('response of trash',this.notes);
    },error=>{
      console.log('error',error)
    })
  }catch(error){
    console.log('error',error)
  }
}
}
