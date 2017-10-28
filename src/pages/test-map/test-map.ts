import { ConferenceDataProvider } from './../../providers/conference-data/conference-data';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TestMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google: any;


@IonicPage()
@Component({
  selector: 'page-test-map',
  templateUrl: 'test-map.html',
})
export class TestMapPage {

  @ViewChild('mapCanvas') mapElement: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams, private confData: ConferenceDataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestMapPage');

    this.confData.getMap().subscribe((mapData: any) => {
      let mapEle = this.mapElement.nativeElement;

      let map = new google.maps.Map(mapEle, {
        center: mapData.find((d: any) => d.center),
        zoom: 16
      });

      mapData.forEach((markerData: any) => {
        let infoWindow = new google.maps.InfoWindow({
          content: `<h5>${markerData.name}</h5>`
        });

        let marker = new google.maps.Marker({
          position: markerData,
          map: map,
          title: markerData.name
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      });

      google.maps.event.addListenerOnce(map, 'idle', () => {
        mapEle.classList.add('show-map');
      });

    });
  }

}
