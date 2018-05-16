import { Component, OnInit, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { PostproductProvider } from '../../providers/postproduct/postproduct';
import { HomePage } from '../home/home';

/**
 * Generated class for the PostproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-postproduct',
  templateUrl: 'postproduct.html',
  providers: [PostproductProvider]
})
export class PostproductPage implements OnInit {

  
  [x: string]: any;
  Postproductform: FormGroup;

  productname: string = null;
  category: string = null;
  price: string = null;
  detail: string = null;
  tel: string = null;
  email: string = null;
  line: string = null;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public postproductProvider: PostproductProvider
            
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostproductPage');
  }

  ngOnInit(): void {
    let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.Postproductform = new FormGroup({
      productname: new FormControl(''),
      category: new FormControl(''),
      price: new FormControl(''),
      detail: new FormControl(''),
      tel: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)]),
      email: new FormControl('', Validators.pattern(EMAILPATTERN)),
      line: new FormControl('')
    });
    }

  Postproduct(){
    console.log.name;
  this.postproductProvider.dopostproduct(
    this.productname, 
    this.category, 
    this.price, 
    this.tel,
    this.email,
    this.line,
    this.detail
  )
  .subscribe((data: any)=>{
    console.log(data);
    if(data.ok){
      let alert = this.alertCtrl.create({
        title: 'ลงประกาศ',
        subTitle: 'ลงประกาศ สำเร็จ',
        buttons: ['yes'] 
      
      });
      alert.present();
      this.navCtrl.push(HomePage);
    }else{
      let alert = this.alertCtrl.create({
        title: 'ลงประกาศ',
        subTitle: 'ลงประกาศ ไม่สำเร็จ!!',
        buttons: ['OK']
      });
      alert.present();
    }
  });
  }




}
