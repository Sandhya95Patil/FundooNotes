import { Component, OnInit, Input} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
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
  changeColor($event) {
    this.getchildMessage = $event
  }
}
