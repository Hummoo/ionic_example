import { ProfilePage } from './../profile/profile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirstTabPage } from '../first-tab/first-tab';
import { NewsFeedPage } from '../news-feed/news-feed';
import { SecondTabPage } from '../second-tab/second-tab';
import { ThemingPage } from '../theming/theming';
import { ThirdTabPage } from '../third-tab/third-tab';
import { MusicPage } from './../music/music';

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
  tabTheming: any = ThemingPage;
  tabMusic: any = MusicPage;
  tabNewsFeed: any = NewsFeedPage;
  tabProfileRoot: any = ProfilePage;
  selectedIndex: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.selectedIndex = navParams.data.tabIndex || 0;
  }
}
