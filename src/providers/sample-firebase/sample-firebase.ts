import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the SampleFirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SampleFirebaseProvider {

  constructor(
    private database: AngularFireDatabase
  ) {
    console.log('Hello SampleFirebaseProvider Provider');
  }

  testAdd() {
    this.database.list(`/members/`).push({
      name: 'Moo',
      age: 25
    });
  }
}
