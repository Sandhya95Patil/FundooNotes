import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http: HttpClient) { }
  post(url,body){
    return this.http.post(url,body);
  }
  post(url,body){
    return this.http.post(url,body)
  }
}
