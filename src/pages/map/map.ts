import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { Component, ElementRef, ViewChild } from '@angular/core';

import { MapProvider } from '../../providers/map/map';

import { NavController, NavParams, Platform } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';


/*declare var google: any;*/

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  /*public origin: string = "";*/

  map = { origin: '', dest: '', waypoints: [] }
  mapUrl: string;
  @ViewChild('mapCanvas') mapElement: ElementRef;
  constructor(
    public mapData: MapProvider,
    public platform: Platform,
    public navCtrl: NavController,
    public navParams: NavParams,
    public sanitizer: DomSanitizer
  ) {
    console.log(this.navParams.get("waypoints") + "con");
    this.map.origin = this.navParams.get("origin");
    this.map.dest = this.navParams.get("dest");
    this.map.waypoints = this.navParams.get("waypoints");
    this.mapUrl = mapData.getMapUrl(this.map.origin, this.map.dest, this.map.waypoints);
  }

  getSafeMapUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.mapUrl);
  }

}
