import { Component, OnInit, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { RegisterProvider } from '../../providers/register/register';
import { LoginPage } from '../login/login';

/**
 * Generated class for the Register3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register3',
  templateUrl: 'register3.html',
  providers: [RegisterProvider]
})
export class Register3Page implements OnInit {

  [x: string]: any;
  signupform: FormGroup;
  
  // userData = {"name":"", "surname":"", "nickname":"", "tel":"", "email":"", "line":"", "aptitude":"", "password":""};
  name: string = null;
  surname: string = null;
  nickname: string = null;
  tel: string = null;
  email: string = null;
  line: string = null;
  aptitude: string = null;
  password: string = null;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public registerProvider: RegisterProvider
  ) {
  }

  ngOnInit() {
    let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.signupform = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(30)]),
      surname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(10)]),
      nickname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(1), Validators.maxLength(10)]),
      tel: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)]),
      email: new FormControl('', Validators.pattern(EMAILPATTERN)),
      line: new FormControl(''),
      aptitude: new FormControl(''),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register3Page');
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


}



