import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { NoteServiceService } from '../../services/noteService/note-service.service';
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() notesforiconchild   
  //@Output() setcolorEvent = new EventEmitter();
  public colors:any=[
    [{ color: '#E0FFFF'},
    { color: '#f28b82'},
    { color: '#fbbc04'},
    { color: '#E6E6FA'}],
    [{ color: '#ccff90'},
    { color: '#E1F5FE'},
    { color: '#cbf0f8'},
    { color: '#aecbfa'}],
    [{ color: '#d7aefb'},
    {color: '#fdcfe8'},
    { color: '#e6c9a8'},
    { color: '#e8eaed'}]
    ];
  constructor(private noteService:NoteServiceService) { }
  ngOnInit() {
  } 
  setcolor(bgcolor){
    console.log("color",bgcolor)
  let data={
    color:bgcolor.color,
    noteIdList:[this.notesforiconchild.id]
  }
  this.notesforiconchild.color=bgcolor.color
  console.log('set color ',data  )
  this.noteService.colorchange(data).subscribe(response=>{
    console.log('response',response)
  },error=>{
    console.log('error',error)
  })
  //this.setcolorEvent.emit(bgcolor);
}
/*********************************Datefunction*********************************/
 setDate(note){
  let d = new Date();
 }

}
// Here a date has been assigned 
// while creating Date object 
var dateobj = new Date('October 1996 05:35:32'); 
  
// date of the month from above date object 
// is extracted using getDate() 
var B = dateobj.getDate(); 
  
// Printing date of the month 
console.log(B); 