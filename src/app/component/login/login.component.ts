import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService  } from "../../services/user service/user.service";
import { User } from "../../model/UserLogin";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm;
  // email;
  // password
  constructor(private router: Router , private userService:UserService) { }
  gotoForget(){
    this.router.navigate(['/forget']);  // define your component where you want to go
    
};
gotoDashboard(){
  this.router.navigate(['/dashboard']);
}
  ngOnInit() {
   this.loginForm= new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)])
   });
  }
  message = {
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'Enter a valid email' }
    ],
  
  'password':[
    { type:'required',message:'Password is required'},
    
  ]
}
  onClickSubmit(value){
    let user:User={
      email:value.email,
      password:value.password,
      service:'advance'
    }
    console.log(" user login", user);

    this.userService.login(user).subscribe(response => {
      console.log(" reponse ", response);
      localStorage.setItem('token', response['id']);
      localStorage.setItem('userId', response['userId']);
      localStorage.setItem('firstName', response['firstName']);
      localStorage.setItem('lastName', response['lastName']);
      localStorage.setItem('email', response['email']);
      
    }, error => {
      console.log(error);

    }
    )

  
  }

  
}
