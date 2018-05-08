import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TechnicianListPage } from '../technician-list/technician-list';
import { GardenerListPage } from '../gardener-list/gardener-list';
import { MaidListPage } from '../maid-list/maid-list';
import { TraderListPage } from '../trader-list/trader-list';


/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

  goTechnicianListPage(){
    this.navCtrl.push(TechnicianListPage);
  }

  goGardenerListPage(){
    this.navCtrl.push(GardenerListPage);
  }

  goMaidListPage(){
    this.navCtrl.push(MaidListPage);
  }

  goTraderListPage(){
    this.navCtrl.push(TraderListPage);
  }

}
