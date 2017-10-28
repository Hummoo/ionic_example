import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google;

@IonicPage()
@Component({
  selector: 'page-test-map2',
  templateUrl: 'test-map2.html'
})
export class TestMap2Page {

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('directionsPanel') directionsPanel: ElementRef;
  map: any;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.loadMap();
    this.startNavigating();
  }

  loadMap() {

    let latLng = new google.maps.LatLng(-34.9290, 138.6010);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }
  addMarker() {

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<h4>Information!</h4>";

    this.addInfoWindow(marker, content);

  }
  addInfoWindow(marker, content) {

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }

  startNavigating() {

    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;

    directionsDisplay.setMap(this.map);
    directionsDisplay.setPanel(this.directionsPanel.nativeElement);

    directionsService.route({
      origin: 'อ่อนนุช',
      destination: 'ลาดกระบัง',
      waypoints: [{ location: 'อโศก' }],
      travelMode: google.maps.TravelMode['DRIVING']
    }, (res, status) => {

      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(res);
      } else {
        console.warn(status);
      }

    });

  }

}
