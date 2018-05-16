import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { CategoryPage } from '../category/category';
import { PostproductPage } from '../postproduct/postproduct';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PostproductPage;
  tab3Root = CategoryPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
