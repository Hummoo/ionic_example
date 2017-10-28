import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the SampleDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SampleDataProvider {

  items: any;

  constructor() {

    this.items = [
      { title: 'one' },
      { title: 'two' },
      { title: 'three' },
      { title: 'four' },
      { title: 'five' },
      { title: 'six' }
    ]

  }

  filterItems(searchTerm) {

    return this.items.filter((item) => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

  }

  //////////////////////////////////////////////////////////////

  private _data = [
    'Fast Times at Ridgemont High',
    'Peggy Sue Got Married',
    'Raising Arizona',
    'Moonstruck',
    'Fire Birds',
    'Honeymoon in Vegas',
    'Amos & Andrew',
    'It Could Happen to You',
    'Trapped in Paradise',
    'Leaving Las Vegas',
    'The Rock',
    'Con Air',
    'Face/Off',
    'City of Angels',
    'Gone in Sixty Seconds',
    'The Family Man',
    'Windtalkers',
    'Matchstick Men',
    'National Treasure',
    'Ghost Rider',
    'Grindhouse',
    'Next',
    'Kick-Ass',
    'Drive Angry',
  ];

  getData(): any[] {
    // return mock data synchronously
    let data: any[] = [];
    for (var i = 0; i < 3; i++) {
      data.push(this._getRandomData());
    }
    return data;
  }

  getAsyncData(): Promise<any[]> {
    // async receive mock data
    return new Promise(resolve => {

      setTimeout(() => {
        resolve(this.getData());
      }, 1000);

    });
  }

  private _getRandomData() {
    let i = Math.floor(Math.random() * this._data.length);
    return this._data[i];
  }
}
