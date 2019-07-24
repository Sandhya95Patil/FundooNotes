import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router , ActivatedRoute} from '@angular/router';
import { UserService } from "../../services/user service/user.service";
@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  public resetForm:FormGroup
  constructor(private router :Router,private activatedRoute :ActivatedRoute, private userService: UserService) { }
 
  ngOnInit() {
    this.resetForm= new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)]),
      cpassword:new FormControl('',[Validators.required,Validators.minLength(6)])
    })
  }
  message={
    'email':[{type:'required',message:'Email is required'},
  {type:'email',message:'Enter valid email'}
],
'password':[
  {type:'required',message:'Password is required'},
  {type:'minlength',message:'Password must be at least 6 characters long'}
],
'cpassword':[
  {type:'required',message:'Password is required'},
  {type:'minlength',message:'Password must be at least 6 characters long'}
]
  }
  resetPassword() {
    const token = this.activatedRoute.snapshot.paramMap.get('token');
    localStorage.setItem('token', token)
console.log("password is reset", );
this.userService.register(token).subscribe(response => {
  console.log(" reponse ", response);
}, error => {
  console.log(error);

}
)
}
}
  

