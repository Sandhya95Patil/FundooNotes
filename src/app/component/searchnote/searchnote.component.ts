import { Component, OnInit } from '@angular/core';
import { DataserviceService } from "../../services/dataservice/dataservice.service";
import { NoteServiceService } from "../../services/noteService/note-service.service";

@Component({
  selector: 'app-searchnote',
  templateUrl: './searchnote.component.html',
  styleUrls: ['./searchnote.component.scss']
})
export class SearchnoteComponent implements OnInit {
  allnotearray = [];
  searchcard = [];

  constructor(private noteService: NoteServiceService, private dataService: DataserviceService) { }
  ngOnInit() {
    this.getNotes();
    this.dataService.currentNote.subscribe(response => {
      if (response.type = 'search') {
        var result = response.data;
        console.log('result', result, this.allnotearray);
        this.searchcard = this.findNote(this.allnotearray, result);
        console.log('searchcard', this.searchcard);

      }
    })
  }
  getNotes() {
    this.noteService.getNote().subscribe(response => {
      console.log('response', response);
      this.allnotearray = response['data'].data;
      console.log('allnotearray', this.allnotearray);
    }, error => {
      console.log(error);
    })
  }
  findNote = function (note, searchnote) {
    console.log('findnote ', note);
    var result = note.filter(item => {
      return item.title.toLowerCase().startsWith(searchnote.toLowerCase()) || item.description.toLowerCase().startsWith(searchnote.toLowerCase())
    });
    return result;

  }
}
