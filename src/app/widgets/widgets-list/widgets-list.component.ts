import {
  Component,
  Input,
  OnInit,
  Output
  } from '@angular/core';
import { EventEmitter } from '@angular/common/src/facade/async';
import { Widget } from '../../shared';

@Component({
  selector: 'app-widgets-list',
  templateUrl: './widgets-list.component.html',
  styleUrls: ['./widgets-list.component.css']
})
export class WidgetsListComponent implements OnInit {

  @Input() widget: Widget;
  @Output() selected = new EventEmitter();

  selectedClass: any = {
    selected: undefined
  };

  constructor() { console.log(this.constructor.name); }

  ngOnInit() {
  }

  adrian(event): void {
    this.selected.emit('adrian has emitted event from WidgetsListComponent!');
  }
}
