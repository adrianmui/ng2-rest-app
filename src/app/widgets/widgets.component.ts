
import { Component, OnInit } from '@angular/core';
import { WidgetsService } from './../shared';
import { Widget } from './../shared';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {

  widgets: Widget[] = [];

  selectedWidget: Widget;
  selectedId: number;

  constructor(private widgetsService: WidgetsService) {
    console.log(this.constructor.name);
  }

  ngOnInit() {
    this.widgetsService.loadData().subscribe(widgets => this.widgets = widgets);
  }

  removeWidget(widget: Widget): void {
    if (this.selectedWidget === widget) {
      this.clearSelected();
    }
    this.widgetsService.removeOne(widget);

  }

  selectWidget(widget: Widget): void {
    if (this.selectedWidget) {
      if (this.selectedWidget.id === widget.id) {
        this.clearSelected();
      } else {
        this.selWidget(widget);
      }
    } else {
       this.selWidget(widget);
    }
  }

  saveWidget(widget: Widget): void {
    console.log('hahahaha', event);
    this.widgets.push(widget);
  }

  cancelWidget(): void {
    this.clearSelected();
  }

  isSelected(widget: Widget): boolean {
    return this.selectedId === widget.id;
  }

  selWidget(widget:Widget): void {
    this.selectedWidget = widget;
    this.selectedId = widget.id;
  }

  clearSelected(): void {
      this.selectedWidget = undefined;
      this.selectedId = undefined;
  }
}
