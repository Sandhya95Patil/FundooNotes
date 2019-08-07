import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private noteSource = new BehaviorSubject({data:'', type:''});
  currentNote = this.noteSource.asObservable();
  constructor() { }

  
  searchNotes(search:any){
    console.log('search note',search);
    this.noteSource.next(search)
  }
}
