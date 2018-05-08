import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { Register3Page } from '../register3/register3';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [LoginProvider]
})
export class LoginPage {

  tel: string = null;
  password: string = null;
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public loginProvider: LoginProvider
  
  ) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad LoginPage');
  // }

  doLogin(){
    this.loginProvider.doLogin(this.tel, this.password)
    .subscribe((data: any)=>{
      console.log(data);
      if(data.ok){
          let token = data.token;
          let id = data.id;
          
          sessionStorage.setItem('token', token);
          sessionStorage.setItem('id', id);
        
          this.navCtrl.setRoot(TabsPage);
      }else{
          let alert = this.alertCtrl.create({
            title: 'เกิดข้อผิดพลาด!',
            subTitle: 'ชื่อผู้ใช้งาน หรือรหัสผ่านไม่ถูกต้อง!',
           buttons: ['OK']
         });
          alert.present();
      }
  });
  }
  
  doRegister(){
    this.navCtrl.push(Register3Page);
  }

  }
