import { Component, Query } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ContactProvider } from '../../providers/member/member';
import * as _ from 'lodash';
import { EditproPage } from '../editpro/editpro';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [ContactProvider]
})
export class ContactPage {

  id = sessionStorage.getItem('id');
  detail: any =[];
  

  constructor(public navCtrl: NavController,
    private contactProvider: ContactProvider,
    private loadingCtrl: LoadingController
  ) {
    // this.getData();
  }
  
  ionViewWillEnter() {
   this.getdata();
  }


  getdata(){
    let id = this.id;

    this.contactProvider.showdetail(id.toString())
      .subscribe((data: any)=>{

        console.log(data);
        this.detail = data.data;

      });
  }

  doRegister(){
    this.navCtrl.push(EditproPage);
  }
  

  ionViewDidLoad(){
   console.log('ionViewDidLoad ContactPage');
  }


}
