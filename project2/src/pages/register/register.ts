import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RegisterProvider } from '../../providers/register/register';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [RegisterProvider]
})
export class RegisterPage {

  [x: string]: any;
  name: string = null;
  surname: string = null;
  nickname: string = null;
  tel: string = null;
  email: string = null;
  line: string = null;
  aptitude: string = null;
  password: string = null;
  password2: string =null;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public registerProvider: RegisterProvider
  ) {
   
  
  }





  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUser(){
    console.log.name;
  this.registerProvider.doregister(
    this.name, 
    this.surname, 
    this.nickname, 
    this.tel,
    this.email,
    this.line,
    this.aptitude,
    this.password
  )
  .subscribe((data: any)=>{
    console.log(data);
    if(data.ok){
      let alert = this.alertCtrl.create({
        title: 'ลงทะเบียน',
        subTitle: 'ลงทะเบียน สำเร็จ',
        buttons: ['yes'] 
      });
      alert.present();
    }else{
      let alert = this.alertCtrl.create({
        title: 'ลงทะเบียน',
        subTitle: 'ลงทะเบียน ไม่สำเร็จ!!',
        buttons: ['OK',]
      });
      alert.present();
    }
  });
  }


  registerUser2(){
    this.navCtrl.push(RegisterPage);
  }



}
