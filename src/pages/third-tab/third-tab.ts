import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ThirdTabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-third-tab',
  templateUrl: 'third-tab.html'
})
export class ThirdTabPage {
  map = { origin: '', dest: '', waypoints: [] }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThirdTabPage');
  }
  navigateToMapPage() {
    console.log(this.map);
    this.navCtrl.push('MapPage', { origin: this.map.origin, dest: this.map.dest, waypoints: this.map.waypoints });

  }

  addWaypoint() {
    this.map.waypoints.push('');
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }
}
