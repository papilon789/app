import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GardenerListPage } from './gardener-list';

@NgModule({
  declarations: [
    GardenerListPage,
  ],
  imports: [
    IonicPageModule.forChild(GardenerListPage),
  ],
})
export class GardenerListPageModule {}
