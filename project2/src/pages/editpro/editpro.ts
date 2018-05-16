import { Component, OnInit, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ContactProvider } from '../../providers/member/member';



/**
 * Generated class for the EditproPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editpro',
  templateUrl: 'editpro.html',
  providers: [ContactProvider]
})
export class EditproPage {

  id = sessionStorage.getItem('id');
  detail: any =[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public contactProvider: ContactProvider
  
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditproPage');
  }

  updatepro(){
    let id = this.id

    // this.contactProvider.updatedata(id.toString())
    
    
  }

}
