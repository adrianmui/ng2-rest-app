import { Widget } from '../../../shared/widget.model';
import { WidgetsService } from '../../../shared/widgets.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-widget-details-description',
  templateUrl: './widget-details-description.component.html',
  styleUrls: ['./widget-details-description.component.css']
})
export class WidgetDetailsDescriptionComponent implements OnInit {

  @Input() selectedWidget: Widget;

  @Output() done = new EventEmitter();

  constructor(private widgetService: WidgetsService) { console.log(this.constructor.name); }

  ngOnInit() {
  }

  clear(event): void {
    this.done.emit(`${this.constructor.name} is done`);
  }



}
