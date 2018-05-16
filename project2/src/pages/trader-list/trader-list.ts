import { Component, Query } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PostproductProvider } from '../../providers/postproduct/postproduct';
import * as _ from 'lodash';

/**
 * Generated class for the TraderListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trader-list',
  templateUrl: 'trader-list.html',
  providers: [PostproductProvider]
})
export class TraderListPage {

  detail: any = [];
  detail2: any = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private postproductProvider: PostproductProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TraderListPage');
  }

  gettrader(){
    let category = "ขายสินค้า";

    this.postproductProvider.detailtrader(category.toString())
    .subscribe((data: any)=>{
      if(data.ok){
        console.log(data);
        this.detail = data.row;
        this.detail2 = _.clone(this.detail)
      } else{
        console.log(data.message);
      }



    });

  }







}
