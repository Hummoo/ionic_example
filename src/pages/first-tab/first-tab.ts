import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SampleFirebaseProvider } from '../../providers/sample-firebase/sample-firebase';

/**
 * Generated class for the FirstTabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first-tab',
  templateUrl: 'first-tab.html',
})
export class FirstTabPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private sampleFirebaseProvider: SampleFirebaseProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstTabPage');
  }

  navigateToTestSliderPage() {
    this.navCtrl.push('TestSliderPage');
  }

  navigateToTestReorderPage() {
    this.navCtrl.push('TestReorderPage');
  }

  doAdd() {
    this.sampleFirebaseProvider.testAdd();
  }

}
