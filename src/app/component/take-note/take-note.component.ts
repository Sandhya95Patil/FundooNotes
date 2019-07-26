import { Component, OnInit } from '@angular/core';
import { notes } from "../../model/addNote";
import { UserService } from "../../services/user service/user.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss']
})
export class TakeNoteComponent implements OnInit {
public addnoteForm:FormGroup
  constructor(private userService: UserService) { }
  
  ngOnInit() {
this.addnoteForm=new FormGroup({
  title: new FormControl('', [Validators.minLength(1)])
 
});

}

isOpen = true;
click() {
  this.isOpen = true;
}


onClickClose(value){
  console.log("the value in form group",this.addnoteForm.value.title);
  
this.isOpen=true;
  let notes: notes = {
    title: value.title,
    service: 'advance'
  }
  console.log("Note is added", notes);

  this.userService.addNote(notes).subscribe(response => {
    console.log(" reponse ", response);

  }, error => {
    console.log(error);

  }
  )
}
}