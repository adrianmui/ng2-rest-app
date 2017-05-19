import { Widget } from '../../../shared/widget.model';
import { WidgetsService } from '../../../shared/widgets.service';
import { NgForm } from '@angular/forms/src/directives';
import { EventEmitter } from '@angular/forms/src/facade/async';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-widget-details-form',
  templateUrl: './widget-details-form.component.html',
  styleUrls: ['./widget-details-form.component.css']
})
export class WidgetDetailsFormComponent implements OnInit {

  @Input() form: Widget;
  @Output() send = new EventEmitter();


  constructor(private widgetService: WidgetsService) { console.log(this.constructor.name); }

  ngOnInit() {
    console.log('initializing');
  }

  clear(event): void {
    this.send.emit(`${this.form.name} has been cleared as WidgetDetailsComponent!`);
  }

  clearForm(): void {
    Object.keys(this.form).forEach( (el) => this.form[el] = undefined);
  }

  new(form: NgForm): void {
    console.log(JSON
    .stringify(form.value));
    this.clearForm();
    this.widgetService.createWidget
    (form.value)
      .subscribe(res => {
        console.log('end of chain: ', res);
        this.send.emit(res) ;
      });
  }

}
