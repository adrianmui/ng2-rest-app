import { Headers, Http } from '@angular/http';
import { Widget } from './index';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

const BASE_URL = 'http://localhost:3000/widgets';
const HEADERS = { headers: new Headers({'Content-Type' : 'application/json'}) };

@Injectable()
export class WidgetsService {
  private cache: Widget[];

  private id: number = 0;

  constructor(private http: Http) {
    console.log(this.constructor.name);
  }

  loadData(): any {
    return this.http.get(`${BASE_URL}`)
      .map(res => res.json());
  }

  removeOne(widget: Widget): Widget {
    return _.remove(this.cache, widget);

  }

  createWidget(widget: Widget) {
    return this.http.post(`${BASE_URL}`,
    JSON.stringify(widget), HEADERS)
      .map(res => res.json());
  }
}
