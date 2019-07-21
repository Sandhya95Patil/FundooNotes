import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, RequiredValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService  } from "../../services/user service/user.service";
import { User } from "../../model/Forget";
@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {
  forgetForm;
  email
  constructor(private router: Router , private  userService:UserService ) { }
  gotoreset(){
    this.router.navigate(['/reset']);  // define your component where you want to go
};
  ngOnInit() {
    this.forgetForm= new FormGroup({
     email:new FormControl('',[Validators.required,Validators.email])
    });
  }
  message={
    email:[{type: 'required',message:'Email is required'}
  ]
 }
 onClickSubmit(value){
let user: User={
email:value.email,
service:'advance'
}
console.log('password forget ', user);
this.userService.forget(user).subscribe(response=>{
  console.log('response',response)
},
error=>{
  console.log(error);
})
}
}
