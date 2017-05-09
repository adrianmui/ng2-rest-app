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
  @Input() selectedClass: boolean;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  constructor() { console.log(this.constructor.name); }

  ngOnInit() {
  }

  select(event): void {
    this.selected.emit(`${this.widget.name} has been selected as WidgetsListComponent!`);
  }

  delete(event): void {
    this.deleted.emit(`${this.widget.name} has been deleted as WidgetsListComponent!`)
  }
}
