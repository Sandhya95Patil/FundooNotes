import { Injectable } from '@angular/core';
import {HttpserviceService  } from "../http service/httpservice.service";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpservice:HttpserviceService) { 
    
  }
  login(){
    this.httpservice.post("",{})
  }
  register(){
    this.httpservice.post('http://34.213.106.173/api/user/userSignUp',{})
  }
}

