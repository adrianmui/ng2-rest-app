import { Injectable } from '@angular/core';

@Injectable()
export class GizmoService {
  private stuff = ['Red', 'Green', 'Blue'];

  constructor() { }

  getStuff(): Array<any> {
    return this.stuff;
  }

}
