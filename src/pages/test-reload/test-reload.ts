import { SampleDataProvider } from './../../providers/sample-data/sample-data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Refresher } from 'ionic-angular';

/**
 * Generated class for the TestReloadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test-reload',
  templateUrl: 'test-reload.html',
})
export class TestReloadPage {

  items: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private data: SampleDataProvider) {
    this.items = data.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestReloadPage');
  }

  doRefresh(refresher: Refresher) {
    console.log('DOREFRESH', refresher);

    this.data.getAsyncData().then((newData) => {
      for (var i = 0; i < newData.length; i++) {
        this.items.unshift(newData[i]);
      }

      refresher.complete();
    });
  }


  doPulling(refresher: Refresher) {
    console.log('DOPULLING', refresher.progress);
  }



}
