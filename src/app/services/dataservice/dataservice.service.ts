import { Injectable } from '@angular/core';
import { BehaviorSubject , Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  
 /**  @description: This data service for search note*/
  private noteSource = new BehaviorSubject({data:'', type:''});
  currentNote = this.noteSource.asObservable();
  constructor() { }
  searchNotes(search:any){
    console.log('search note',search);
    this.noteSource.next(search)
  }
   /** @description:  Required for Grid & list view */
   result: boolean = true;
   subject = new Subject
 
   /* gridView method*/
   gridView() {
     if (this.result) {
       this.subject.next({ data: "column" });
       this.result = false;
     }
     else {
       this.subject.next({ data: "row" });
       this.result = true;
     }
   }
 
   getView() {
     this.gridView();
     return this.subject.asObservable();
   }
   private listData = new BehaviorSubject([]);
   viewListData = this.listData.asObservable();
   listViewData(message) {
     console.log(" data service called", message);
     this.listData.next(message)
   }

/** @description: This method is for get label */
    private arrayData = new BehaviorSubject({ type: '', data: [] });
   currentData = this.arrayData.asObservable();
   changeData(message: any) {
     // console.log(" data service called", message);
     this.arrayData.next(message)
   }
}
