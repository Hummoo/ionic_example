import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TestSliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test-slider',
  templateUrl: 'test-slider.html',
})
export class TestSliderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestSliderPage');
  }

}
