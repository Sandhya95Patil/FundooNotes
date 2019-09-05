import { Injectable } from '@angular/core';
import { HttpserviceService } from "../../services/http service/httpservice.service";

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  constructor(private httpservice:HttpserviceService) { }
  addNote(notes){
    return this.httpservice.encodedPost('/notes/addNotes',notes)
  }
  getNote(){
   return this.httpservice.get('/notes/getNotesList')
  }
  updateNote(note){
    return this.httpservice.post('/notes/updateNotes',note)
  }
  colorchange(data){
    return this.httpservice.post('/notes/changesColorNotes',data)
  }
  setReminder(object){
    return this.httpservice.post('/notes/addUpdateReminderNotes',object)
  }
  getReminderNotesList()
  {
    return this.httpservice.get('/notes/getReminderNotesList')
  }
  getLableList(){
    return this.httpservice.get('/noteLabels/getNoteLabelList')
  }
  getArchiveNotesList(){
    return this.httpservice.getNotes('/notes/getArchiveNotesList')
  }
  archiveNote(data){
    return this.httpservice.postAth('/notes/archiveNotes',data);
  }
}
