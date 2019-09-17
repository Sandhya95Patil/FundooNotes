import { Component, OnInit, Input} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
import { DataserviceService } from "../../services/dataservice/dataservice.service";
export interface DialogData {
}
@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {
  @Input() getchildMessage:any;
  // @Output() setcolorEvent=new EventEmitter 
isList;
direction:String ="row";
wrap: String = "wrap";
view1:any;
islist;
class={
  listView: false,
  gridView: true
}

constructor(public dialog: MatDialog,private dataService:DataserviceService) {}
  ngOnInit() {
    this.listView()
  this.isList = localStorage.getItem('isListView')
  this.dataService.viewListData.subscribe(data=>{
  this.islist = data;
   
  this.dataService.getView().subscribe((response)=>{
    this.view1 = response;
    this.direction = this.view1.data
  });

})
}
listView(){
  this.isList = localStorage.getItem('isListView')
  this.islist = 'http://fundoonotes.incubation.bridgelabz.com/api' + this.isList;
}
/** @description: This method is for update note */
  openDialog(notes) {
    const dialogRef = this.dialog.open(UpdateComponent, {
      data : {notes}
    });
    dialogRef.afterClosed().subscribe(response => {
      console.log('The dialog was closed',response);
    });
  }

}