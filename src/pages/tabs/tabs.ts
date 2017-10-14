import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirstTabPage } from '../first-tab/first-tab';
import { SecondTabPage } from '../second-tab/second-tab';
import { ThirdTabPage } from '../third-tab/third-tab';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root: any = FirstTabPage;
  tab2Root: any = SecondTabPage;
  tab3Root: any = ThirdTabPage;
  selectedIndex: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.selectedIndex = navParams.data.tabIndex || 0;
  }
}
