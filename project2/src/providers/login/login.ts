import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LoginProvider Provider');
  }

  doLogin(tel: string, password: string) {
    let url = 'http://localhost:3000/login';
    return this.http.post(url, {
      tel: tel,
      password: password
    });
  }

}
