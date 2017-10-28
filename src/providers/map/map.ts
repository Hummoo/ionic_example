import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MapProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MapProvider {
  data: any;
  mapurl: string;
  waypoints: string = '';
  constructor(public http: Http) {
    console.log('Hello MapProvider Provider');
  }

  getMapUrl(origin: string, dest: string, waypoints: string[]) {
    this.waypoints = '';
    waypoints.forEach((item, index) => {
      if (item != null && item.length > 0) {
        if (index == 0) {
          this.waypoints = item;
        } else {
          if (this.waypoints.length > 0) {
            this.waypoints = this.waypoints + "|" + item;
          } else {
            this.waypoints = item;
          }
        }
      }
    });

    console.log(this.waypoints);
    this.mapurl = "https://www.google.com/maps/embed/v1/directions?key=AIzaSyDCdlas9jY3MpZo7eIbWShAelShWihGeKA&origin=" + origin + "&destination=" + dest;
    if (this.waypoints.length > 0) {
      this.mapurl = this.mapurl + "&waypoints=" + this.waypoints;
    }
    return this.mapurl;
  }
}
