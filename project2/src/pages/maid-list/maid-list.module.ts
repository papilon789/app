import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaidListPage } from './maid-list';

@NgModule({
  declarations: [
    MaidListPage,
  ],
  imports: [
    IonicPageModule.forChild(MaidListPage),
  ],
})
export class MaidListPageModule {}
