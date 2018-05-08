import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TechnicianListPage } from './technician-list';

@NgModule({
  declarations: [
    TechnicianListPage,
  ],
  imports: [
    IonicPageModule.forChild(TechnicianListPage),
  ],
})
export class TechnicianListPageModule {}
