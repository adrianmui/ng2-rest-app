import { Widget } from '../../shared';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-details',
  templateUrl: './widget-details.component.html',
  styleUrls: ['./widget-details.component.css']
})
export class WidgetDetailsComponent implements OnInit {

  @Input() selectedWidget: Widget;

  constructor() { }

  ngOnInit() {
  }

}
