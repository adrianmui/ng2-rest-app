
import { Component, OnInit } from '@angular/core';
import { WidgetsService } from './../shared';
import { Widget } from './../shared';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {

  widgets: Widget[] = this.widgetsService.data();

  selectedWidget: Widget;
  selectedId: number;

  constructor(private widgetsService: WidgetsService) {
    console.log(this.constructor.name);
  }

  ngOnInit() {
    console.log(this.constructor.name, 'ngOnInit()');
  }

  removeWidget(widget: Widget): void {
    console.log('hi');
    this.widgetsService.removeOne(widget);
    this.widgets = this.widgetsService.data();
  }

  toggleWidget(widget: Widget): void {
    console.log(`toggleWidget(${widget.name})`);
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

  isSelected(widget: Widget): boolean {
    return this.selectedId === widget.id;
  }

  private selWidget(widget:Widget): void {
    this.selectedWidget = widget;
    this.selectedId = widget.id;
  }

  private clearSelected(): void {
      this.selectedWidget = undefined;
      this.selectedId = undefined;
  }
}
