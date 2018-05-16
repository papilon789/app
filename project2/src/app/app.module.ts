import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular-lite';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';


import { LoginPageModule } from '../pages/login/login.module';
import { LoginPage } from '../pages/login/login';
import { LoginProvider } from '../providers/login/login';
import { HttpClientModule } from '@angular/common/http';
import { RegisterPageModule } from '../pages/register/register.module';
import { RegisterPage } from '../pages/register/register';
import { RegisterProvider } from '../providers/register/register';
import { CategoryPageModule } from '../pages/category/category.module';
import { CategoryPage } from '../pages/category/category';
import { TechnicianListPageModule } from '../pages/technician-list/technician-list.module';
import { GardenerListPageModule } from '../pages/gardener-list/gardener-list.module';
import { MaidListPageModule } from '../pages/maid-list/maid-list.module';
import { TraderListPageModule } from '../pages/trader-list/trader-list.module';
import { TechnicianListPage } from '../pages/technician-list/technician-list';
import { GardenerListPage } from '../pages/gardener-list/gardener-list';
import { MaidListPage } from '../pages/maid-list/maid-list';
import { TraderListPage } from '../pages/trader-list/trader-list';
import { Register3PageModule } from '../pages/register3/register3.module';
import { Register3Page } from '../pages/register3/register3';
import { ContactProvider } from '../providers/member/member';
import { EditproPageModule } from '../pages/editpro/editpro.module';
import { EditproPage } from '../pages/editpro/editpro';
import { PostproductPageModule } from '../pages/postproduct/postproduct.module';
import { PostproductPage } from '../pages/postproduct/postproduct';
import { PostproductProvider } from '../providers/postproduct/postproduct';




@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [ 
    FormsModule, 
    MbscModule,
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    LoginPageModule,
    RegisterPageModule,
    CategoryPageModule,
    TechnicianListPageModule,
    GardenerListPageModule,
    MaidListPageModule,
    TraderListPageModule,
    Register3PageModule,
    EditproPageModule,
    PostproductPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    CategoryPage,
    TechnicianListPage,
    GardenerListPage,
    MaidListPage,
    TraderListPage,
    Register3Page,
    EditproPage,
    PostproductPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    RegisterProvider,
    ContactProvider,
    PostproductProvider
  ]
})
export class AppModule {}
