import { NgForm } from '@angular/forms/src/directives';
import { WidgetsService } from '../../shared/widgets.service';
import { EventEmitter } from '@angular/forms/src/facade/async';
import { Widget } from '../../shared';
import { Component, Input, OnInit, Output } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-widget-details',
  templateUrl: './widget-details.component.html',
  styleUrls: ['./widget-details.component.css']
})
export class WidgetDetailsComponent implements OnInit {

  form: Widget = {
    name: '',
    description: ''
  };

  @Input() selectedWidget: Widget = undefined;

  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter();


  constructor(private widgetService: WidgetsService) { console.log(this.constructor.name); }

  ngOnInit() {
  }

  submit(event): void {
    console.log(`${this.constructor.name}: ${event}`);
    this.save.emit(event);
  }

  clear(event): void {
    this.cancel.emit(`${this.selectedWidget.name} has been cleared as WidgetDetailsComponent!`);
  }

  clearForm(): void {
    Object.keys(this.form).forEach( (el) => this.form[el] = undefined);
  }

}
