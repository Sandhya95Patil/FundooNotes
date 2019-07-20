import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {
  forgetform;
  email
  constructor(private router: Router) { }
  gotoreset(){
    this.router.navigate(['/reset']);  // define your component where you want to go
};
  ngOnInit() {
    this.forgetform= new FormGroup({
     email:new FormControl('',[Validators.required,Validators.email])
    });
  }
  onClickSubmit(value){this.email=value.email;}
}
