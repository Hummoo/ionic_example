import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { VimeoPage } from './../videos/vimeo';
import { YoutubePage } from './../videos/youtube';

/**
 * Generated class for the ThemingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-theming',
  templateUrl: 'theming.html',
})
export class ThemingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThemingPage');
  }

  playVimeo() {
    this.navCtrl.push(VimeoPage);
  }

  playYoutube() {
    this.navCtrl.push(YoutubePage);
  }

}
