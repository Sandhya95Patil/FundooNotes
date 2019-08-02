import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { NoteServiceService } from '../../services/noteService/note-service.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Output() setcolorEvent = new EventEmitter();
  public colors:any=[
   [{color:'#fff'},
   {color:'#f28b82'},
   {color:'#fbbc04'},
   {color:'#fff475'}],
  [{color:'#ccff90'},
   {color:'#a7ffeb'},
   {color:'#cbf0f8'},
   {color:'#aecbfa'}],
   [{color:'#d7aefb'},
   {color:'#fdcfe8'},
   {color:'#e6c9a8'},
   {color:'#e8eaed'}]
  ]
 
  constructor(private noteService:NoteServiceService) { }
  ngOnInit() {

  } 
  
  setcolor(color,card){
    console.log("color",color)
  let data={
    color:this.color,
    cardIdList:this.card
  }
  console.log('set color ',data)
  this.noteService.colorchange(data).subscribe(response=>{
    console.log('response',response)
  },error=>{
    console.log('error')
  }
  )
  this.setcolorEvent.emit(this.colors);

  
}
}
