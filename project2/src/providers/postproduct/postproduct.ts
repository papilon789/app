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
    iduser: string,
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

      iduser: iduser,
      productname: productname,
      category: category,
      price: price,
      detail: detail,
      tel: tel,
      email: email,
      line: line
    });
  }

  detailtrader(category: string){

    let token = sessionStorage.getItem('token');
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };

    let url = 'http://localhost:3000/product/detail/trader?category=' + category;
    return this.http.get(url, httpOptions);


  }



}
