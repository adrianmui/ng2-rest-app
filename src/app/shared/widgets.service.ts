import { Widget } from './index';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
@Injectable()

export class WidgetsService {
  private cache: Widget[] = [{
    'id': 1,
    'img': 'assets/img/number-1.png',
    'name': 'Widget 1',
    'description': 'This is a description',
    'featured': true
  },
  {
    'id': 2,
    'img': 'assets/img/number-2-blue-icon.png',
    'name': 'Widget 2',
    'description': 'This is a description!',
    'featured': false
  },
  {
    'id': 3,
    'img': 'assets/img/number-3-icon.png',
    'name': 'Widget 3',
    'description': 'This is a lovely widget',
    'featured': false
  }];

  private id: number = this.cache.length + 1;

  data(): Widget[] {
    return this.cache;
  }

  removeOne(widget:Widget): Widget {
    return _.remove(this.cache, widget);

  }

  addOne(form: Widget): void {
    form.id = this.id;
    this.id += 1;
    this.cache.push(form);
  }
}
