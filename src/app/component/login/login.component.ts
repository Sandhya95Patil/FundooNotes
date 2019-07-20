import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm;
  email;
  password
  constructor(private router: Router) { }
  GotoForget(){
    this.router.navigate(['/forget']);  // define your component where you want to go
};
  ngOnInit() {
   this.loginForm= new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)])
   });
  }
  account_validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'Enter a valid email' }
    ],
  
  'password':[
    { type:'required',message:'Password is required'},
    
  ]
}
  onClickSubmit(value) {this.email=value.email;this.password=value.password}

}
