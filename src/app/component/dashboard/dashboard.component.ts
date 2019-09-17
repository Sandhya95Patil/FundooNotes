import { Component, OnInit, Input } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef} from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from "../../services/dataservice/dataservice.service";
import { NoteServiceService } from "../../services/noteService/note-service.service";
import { UserService } from "../../services/user service/user.service";
//import { SetprofileComponent } from "../setprofile/setprofile.component";
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  mobileQuery: MediaQueryList;
 

// export class DashboardComponent implements OnDestroy{
 
  // fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  // fillerContent = Array.from({length: 50}, () =>
  //     ``);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private router:Router,
    private dataService:DataserviceService,private noteService:NoteServiceService,private userService:UserService ,public dialog:MatDialog) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  allLabel = [];
  localstorage_image:any
  imageurl:string
  fname;
  lname;
  email;
  username;
  isList:any
  view:any
  grid:any
  list:any
  
gotoLogin(){
  this.router.navigate(['/login']);
}
  ngOnInit() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    //this.getLabelList() ;
    this.list = localStorage.getItem('isListView')
  //  this.grid = localStorage.getItem('gridview')
    //this.changeProfilePic();
    this.fname=localStorage.getItem('firstName');
    this.lname=localStorage.getItem('lastName');
    this.email=localStorage.getItem('email');
    this.username=this.fname + this.lname;
    localStorage.setItem('userName',this.username);
   // this.dataService.profilepicData.subscribe(data=>{
     // this.changeProfilePic();
    //})


    
  }

  
  // ngOnDestroy(): void {
   
  // }
  /*************************Search Note**********************/
searchNotes(event:any){
 this.router.navigate(['/dashboard/search']);
  console.log('event',event);
  let searchNote=event.target.value;
  console.log('search',searchNote);
 this.dataService.searchNotes({
   data:searchNote,
   type:'search'
})
}
/******************************Get Label List*************************/
getLabelList() {
  try {
    this.noteService.getLableList().subscribe(response => {
      this.allLabel = response['data'].details

      this.dataService.changeData({
        type: 'label',
        data: response['data'].details
      })
      this.allLabel.reverse();

    }, error => {
      console.log(" error is ", error);

    })

  } catch (error) {
    console.log(error);

  }
}
  /**@description: This method is for grid list view based on true or false */
  
   View() 
   {
     if (this.list == true) {
       this.list = false;
     } else {
       this.list = true;
     }
     this.isList = this.list;
     localStorage.setItem('isListView', this.isList);
     console.log('List view data',this.isList)
     this.dataService.listViewData({
       data: this.isList
     });
}
/**@description: This method is for logout the account it will all the local storage data  */
logout()
{
  this.userService.logoutUser();
  localStorage.clear();
  console.log('User logout')
  this.router.navigate(['/login']);
}
}

