import { Component, OnInit, Input } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from "../../services/dataservice/dataservice.service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
// export class DashboardComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
export class DashboardComponent implements OnDestroy{
  mobileQuery: MediaQueryList;
  // fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  // fillerContent = Array.from({length: 50}, () =>
  //     ``);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private router:Router,private dataService:DataserviceService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }


  
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
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


}
