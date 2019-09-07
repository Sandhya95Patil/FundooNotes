import { Injectable } from '@angular/core';
import { HttpserviceService } from "../http service/httpservice.service";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpservice: HttpserviceService) {

  }

  register(user) {
    return this.httpservice.post('/user/userSignUp', user)

  }
  login(user){
    return this.httpservice.post('/user/login',user)
  }
  forget(user){
  return this.httpservice.post('/user/reset',user)
  }
  reset(user){
    return this.httpservice.encodedPost('/reset-password',user)
  }
  logoutUser()
  {
    return this.httpservice.post('/user/logout',{});
  }
}

