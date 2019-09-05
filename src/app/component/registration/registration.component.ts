import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../model/UserRegister';
import { UserService } from '../../services/user service/user.service'
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public registerForm: FormGroup
 
  constructor(private router: Router, private userService: UserService,private snackBar:MatSnackBar) {
  }
  gotoLogin() {
    this.router.navigate(['/login']);  // define your component where you want to go
  };
  ngOnInit() {
   
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      emailid: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      cpassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  
  }
  message = {
    'firstName':[
      { type:'required',message:'First name is required'}
    ],
    'lastName':[
      { type:'required',message:'Last name is required'}
    ],  
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
  onClickSubmit(value) {
    let user: User = {
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.emailid,
      password: value.password,
      service: 'advance'
    }
    console.log(" user created", user);

    this.userService.register(user).subscribe(response => {
      console.log(" reponse ", response);
      this.snackBar.open('User Registered successfully','',{
        duration:1000
      })

    }, error => {
      console.log(error);

    }
    )

  }

}
