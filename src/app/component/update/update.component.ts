import { Component, OnInit, Inject } from '@angular/core';
import { notes } from "../../model/updateNote";
import { NoteServiceService } from '../../services/noteService/note-service.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
}
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private noteService:NoteServiceService) {
     console.log('data in update ',data);
     
     }


  
  ngOnInit() {
    // var updatedata=this.data;
   // this.updateNotes(this.data);
  }
 
  onNoClick(): any {
   this.dialogRef.close();
   } 

  updateNotes(data){
    
    let note:notes={
      noteId:data.notes.id,
      title: data.notes.title,
      description: data.notes.description
    }
    console.log('respone',note);
    this.noteService.updateNote(note).subscribe(response=>{
      console.log('response',response);
    },error=>{
      console.log(error);
    })
  }
}
