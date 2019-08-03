import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { NoteServiceService } from '../../services/noteService/note-service.service';
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() notesforiconchild   
  @Output() setcolorEvent = new EventEmitter();
  public colors:any=[
[{ color: '#00FFFF' },
{ color: '#7FFFD4' },
{ color: '#F0E68C' },
{ color: '#2E8B57' }],
[{ color: '#FFFF00' },
{ color: '#ADFF2F' },
{ color: '#00FF7F' },
{ color: '#FFDEAD' }],
[{ color: '#8A2BE2' },
{ color: '#663399' },
{ color: '#00BFFF' },
{ color: '#0000FF' }]
]
  constructor(private noteService:NoteServiceService) { }
  ngOnInit() {
  } 
  setcolor(color){
    console.log("color",color)
  let data={
    color:color.color,
    noteIdList:[this.notesforiconchild.id]
  }
  console.log('set color ',data  )
  this.noteService.colorchange(data).subscribe(response=>{
    console.log('response',response)
  },error=>{
    console.log('error',error)
   
  })
  this.setcolorEvent.emit(color);
}
}
