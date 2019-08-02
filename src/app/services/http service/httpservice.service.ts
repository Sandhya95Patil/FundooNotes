import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  baseUrl = environment.baseUrl
  constructor(private http: HttpClient) { }
post(url, data) {
    let options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token'),
        'Content-Type': 'application/json'
      })
    }
    return this.http.post(this.baseUrl + url, data, options);
  }
  encode(data) {
    const formBody = [];
    for (const property in data) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }
  encodedPost(url, data) {
    let options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token'),
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    }
    return this.http.post(this.baseUrl + url, this.encode(data), options)
  }
  get(url){
    let options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }) 
    }
    return this.http.get(this.baseUrl+url,options)

}
}