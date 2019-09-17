import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from "../../services/noteService/note-service.service";
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  notes=[];
  


  constructor(private noteService:NoteServiceService) { }

  ngOnInit() {
    this.getArchiveNoteList();
  }

   /**
    * @description: this method is for getting the all Archive notecard from backend
    *                component
    * @param      : notes Array
    */
   getArchiveNoteList() {
  
    this.noteService.getArchiveNotesList().subscribe(response => {
      console.log('response ', response['data'].data);
      this.notes = response['data'].data
    }, error => {
      console.log('error ', error);
    })
  }


}
