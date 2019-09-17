import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteServiceService } from "../../services/noteService/note-service.service";

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  notes=[];

  constructor(private activeRouter:ActivatedRoute,private noteService:NoteServiceService) { }

  ngOnInit() {
    this.activeRouter.params.subscribe(data=>{
      this.getnoteByLabel();
    })
  }
  /** @description: This method is for get notes by label */
getnoteByLabel(){
  var label=
  this.activeRouter.snapshot.paramMap.get('label');
console.log('Label fom route',label)

try{
  this.noteService.getNoteByLabel(label).subscribe(response=>{
    this.notes=response['data'].data
    console.log('notes array',this.notes);
  
  },error=>{
console.log('error'),error
  })

}catch(error)
{
  console.log(error)
}
}
}
