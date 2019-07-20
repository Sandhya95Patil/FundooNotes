import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  RegisterForm;
  FirstName;
  LastName;
  emailid;
  password;
  cpassword;
  constructor(private router: Router) {
   }
   gotologin(){
    this.router.navigate(['/login']);  // define your component where you want to go
};

  ngOnInit() {
this.RegisterForm=new FormGroup({
  FirstName: new FormControl('', [Validators.required, Validators.minLength(3)]) ,
  LastName: new FormControl('',[Validators.required,Validators.minLength(3)]),
  emailid: new FormControl ('',[Validators.required,Validators.email]),
  password: new FormControl('',[Validators.required,Validators.minLength(6)]),
  cpassword  :new FormControl('',[Validators.required,Validators.minLength(6)])  
});   
}
account_validation_messages = {
  'emailid': [
    { type: 'required', message: 'Email is required' },
    { type: 'email', message: 'Enter a valid email' }
  ],
  'password': [
    { type: 'required', message: 'Password is required' },
    { type: 'minlength', message: 'Password must be at least 6 characters long' },
  ],
  'cpassword': [
    { type: 'required', message: 'Confirm password is required' },
    { type: 'minlength', message: 'Password must be at least 6 characters long' }
  ],
}

onClickSubmit(value) {this.FirstName = value.FirstName;this.LastName = value.LastName;this.
  emailid = value.emailid; this. password = value. password;this.cpassword=value.cpassword;}

}
