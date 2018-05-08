import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RegisterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RegisterProvider {

  

  constructor(public http: HttpClient) {
    console.log('Hello RegisterProvider Provider');
  }

  doregister(
    name: string, 
    surname: string, 
    nickname: string, 
    tel: string, 
    email: string,
    line: string,
    aptitude: string,
    password: string
  ){
    let url = 'http://localhost:3000/member';
    return this.http.post(url, {

      name: name,
      surname: surname, 
      nickname: nickname, 
      tel: tel,
      email: email,
      line: line,
      aptitude: aptitude,
      password: password
    });
  }

}
