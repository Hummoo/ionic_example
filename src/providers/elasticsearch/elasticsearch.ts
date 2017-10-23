import { window } from 'rxjs/operator/window';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as elasticsearch from 'elasticsearch';

/*
  Generated class for the ElasticsearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ElasticsearchProvider {
  client: any;

  constructor(public http: Http) {
    console.log('Hello ElasticsearchProvider Provider');
    this.client = new elasticsearch.Client({
      host: '127.0.0.1:9200',
      log: 'error'
    });
  }

  search(index, body) {
    return this.client.search({ index: index, body: body });
  };

  tagSearch(tags: string[]) {
    console.log(this.client);

    let body = {
      query: {
        bool: {
          should: [
            { terms: { keywords: tags } }
          ]
        }
      }
    };

    /*
      'library' is my index.
      See https://www.sitepoint.com/search-engine-node-elasticsearch/ for more info.
    */
    return this.search('library', body);
  }

}