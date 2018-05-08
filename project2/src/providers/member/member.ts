import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ContactProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactProvider {

  info = [];

  constructor(public http: HttpClient) {
    console.log('Hello ContactProvider Provider');
  }

  showdetail(id: string) {

    let token = sessionStorage.getItem('token');
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };

    let url = 'http://localhost:3000/member/detail?id=' + id;
    return this.http.get(url, httpOptions);
  }

  updatedata(
    id: string,
    name: string, 
    surname: string, 
    nickname: string, 
    tel: string, 
    email: string,
    line: string,
    aptitude: string,
    password: string
  ){
    let url = 'http://localhost:3000/member/update?id=' + id;
    return this.http.put(url, {

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
