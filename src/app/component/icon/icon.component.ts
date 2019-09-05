import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { NoteServiceService } from '../../services/noteService/note-service.service';
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  date;
  dateTime;
  value;
  labelText;
  todayDate;
  @Input() notesforiconchild   
  @Input() isTrash
  @Input() isArchive 
  @Input() isTakeNote
  isArchived=true
  isDeleted=true
  //@Output() setcolorEvent = new EventEmitter();
  @Output() onArchiveChange=new EventEmitter();
  @Output() onChangeReminder=new EventEmitter();
  @Output() onChangeLabel=new EventEmitter();
  @Output() labelToNote=new EventEmitter();
  @Output() reminderToNote=new EventEmitter();
  @Output() noteTrash=new EventEmitter();
  @Output() childObject=new EventEmitter();




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
  constructor(private noteService:NoteServiceService,private snackBar:MatSnackBar) { }
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
/**
 * @description: This method is for set reminder
 */

setReminder(){
  let today=new Date();
  today.setHours(20);
  today.setMinutes(0);
  console.log("today",today)
  console.log('Reminder',this.notesforiconchild)
  if(this.notesforiconchild!==undefined)
  {
 console.log('add reminder',this.notesforiconchild.reminder[0]=today)
     let object={
      "noteIdList":[this.notesforiconchild.id],
      "reminder":[today],
         "type":"reminder"
  }
  console.log('reminder',object)
    this.noteService.setReminder(object).subscribe(response => {
        console.log('response', response)
      }, error => {
        console.log(error);
     })
  }
  } 
 /**
 * @description: this method is for  set reminder to card for today
 */
 today() {
 this.date = new Date();
 this.date.setHours(20, 0, 0)
 console.log("Today date ", this.date)
  this.todayDate = {
    reminder: [this.date],
    isPined: false,
    isArchived: false,
    isDeleted: false,
    noteIdList: [this.notesforiconchild.id],
    userId: localStorage.getItem('userId')
  };
  console.log(" todya date", this.todayDate);
  this.noteService.setReminder(this.todayDate).subscribe(response => {
    console.log(" Response from set reminder", response);
  }, error => {
    console.log(error);
  })
 }
 /**
 * @description: this method is for setreminder for tomarrrow 
 */
 tommorrow() {
 var today = new Date();
 var tomorrow = new Date();
 var tomm = tomorrow.setDate(today.getDate() + 1);
 tomorrow.setHours(8, 0, 0)
 console.log('Tommorrow date',tomorrow)
  this.todayDate = {
    reminder: [tomm],
    isPined: false,
    isArchived: false,
    isDeleted: false,
    noteIdList: [this.notesforiconchild.id],
    userId: localStorage.getItem('userId')
  };
  console.log(" today date", this.todayDate);
  this.noteService.setReminder(this.todayDate).subscribe(response => {
    console.log(" Response from set reminder", response);
  }, error => {
    console.log(error);
  })
 }
 /**
 * @description: this method is for finding next MOnday date 
 */
 closestMonday = () => {
 var curr_date = new Date(); // current date
 var day_info = 8.64e+7; // milliseconds per day
 var days_to_monday = 8 - curr_date.getDay(); // days left to closest Monday
 var monday_in_sec = curr_date.getTime() + days_to_monday * day_info; // aleary Monday in seconds from 1970 
 var next_monday = new Date(monday_in_sec); // Monday in date object
 next_monday.setHours(8, 0, 0);
 console.log(" next monday ", next_monday);
 return next_monday;
 }
 /**
 * @description: this method is for setReminder to Next monday only 
 */
 nextWeekMonday() {
 
 var monday = this.closestMonday()
 console.log(" next week Monday ", monday);
  this.todayDate = {
    reminder: [monday],
    isPined: false,
    isArchived: false,
    isDeleted: false,
    noteIdList: [this.notesforiconchild.id],
    userId: localStorage.getItem('userId')
  };
  console.log(" todya date", this.todayDate);
  this.noteService.setReminder(this.todayDate).subscribe(response => {
    console.log(" response from setReminder", response);
  }, error => {
    console.log(error);
 
  })
 }
 /** @description: This method is for Archiv note */
 archiveNote(){
   try{
     var data={
       noteIdList:[this.notesforiconchild.id],
       isArchived:this.isArchived

     }
     console.log('archive data',data)
     this.noteService.archiveNote(data).subscribe(response=>{
       this.onArchiveChange.emit();
       this.snackBar.open('Arechive note','',{
         duration:1000
       })
     },error=>{
console.log('error in archive ',error)
     })
   }catch(error){
     console.log(error)
   }
 }

 /** @description: This method is far unarchive note  */
 unArchiveNote(){
   try{
     var data={
       noteIdList:[this.notesforiconchild.id],
       isArchived:false
     }
     this.noteService.archiveNote(data).subscribe(response=>{
       this.onArchiveChange.emit();
       this.snackBar.open('Unarchive note','',{
         duration:1000
       })
     },error=>{
       console.log('error in unarchive',error)
     })
   }
   catch(error){
     console.log(error)
   }
 }
}