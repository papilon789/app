import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PostproductProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostproductProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PostproductProvider Provider');
  }



  dopostproduct(
    productname: string,
    category: string,
    price: string,
    detail: string,
    tel: string,
    email: string,
    line: string
  ){
    let url = 'http://localhost:3000/product';
    return this.http.post(url, {

      productname: productname,
      category: category,
      price: price,
      detail: detail,
      tel: tel,
      email: email,
      line: line
    });
  }



}
