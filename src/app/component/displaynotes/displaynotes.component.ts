import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';

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
/***************************************To update component*******************************/
constructor(public dialog: MatDialog) {}
openDialog(notes) {
    const dialogRef = this.dialog.open(UpdateComponent, {
      data : {notes}
    });

    dialogRef.afterClosed().subscribe(response => {
      console.log('The dialog was closed',response);
    
    });
  }
  ngOnInit() {
    
  }
  // changecolorfromchild(event) {
  //   console.log('event in display',event);
  //  this.setcolorEvent=event; 
  // }
}