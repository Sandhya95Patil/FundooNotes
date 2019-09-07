import { Injectable } from '@angular/core';
import { HttpserviceService } from "../../services/http service/httpservice.service";

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  constructor(private httpservice:HttpserviceService) { }
  /**@description: this method is for add note */
  addNote(notes){
    return this.httpservice.encodedPost('/notes/addNotes',notes)
  }
  /**@description: This method is for get note */
  getNote(){
   return this.httpservice.get('/notes/getNotesList')
  }
  /**@description:This method is for update note */
  updateNote(note){
    return this.httpservice.post('/notes/updateNotes',note)
  }
  /**@description: This method is for color change*/
  colorchange(data){
    return this.httpservice.post('/notes/changesColorNotes',data)
  }
  /**@description:This method is for set reminder */
  setReminder(object){
    return this.httpservice.post('/notes/addUpdateReminderNotes',object)
  }
  /**@description:This method is for get reminder note list */
  getReminderNotesList()
  {
    return this.httpservice.get('/notes/getReminderNotesList')
  }
  /**@description: this method is for get label list */
  getLableList(){
    return this.httpservice.get('/noteLabels/getNoteLabelList')
  }
  /**@description: This method is for get archive note list */
  getArchiveNotesList(){
    return this.httpservice.getNotes('/notes/getArchiveNotesList')
  }
  /**@description: this method is for get trash note list */
  getTrashNoteList(){
    return this.httpservice.getNotes('/notes/getTrashNotesList')
  }
  /**@description: This method is for Archive note */
  archiveNote(data){
    return this.httpservice.postAth('/notes/archiveNotes',data);
  }
  /**@description : This method is for get note by label name */
  getNoteByLabel(label){
    console.log("note label",label)
    return this.httpservice.postAth('/notes/getNotesListByLabel/',label);

  }
  /***@description: This method is for delete forever api  */
  deleteForever(data){
    return this.httpservice.postAth('/notes/deleteForeverNotes',data)
  }
  /**@description:This method is for delete note */
  deleteNote(data){
    return this.httpservice.postAth('/notes/trashNotes',data)
  }
  addLabelToNote(data){
    return this.httpservice.postAth('/notes/' +data.noteId+'/addLabelToNotes/'+data.labelId+'/add',{});
    
  }
}
