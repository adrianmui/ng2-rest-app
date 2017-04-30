import { Widget } from './widgets.model';
import { WidgetsService } from './widgets.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {

  widgets: Widget[] = this.widgetsService.data();

  selectedWidget: Widget;
  selectedClass: any = {
    selected: undefined
  };

  constructor(private widgetsService: WidgetsService) {
    console.log(this.constructor.name);
  }

  ngOnInit() {
    console.log('this.constructor.name', 'ngOnInit()');
  }

  toggleWidget(widget: any): void {
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

  selWidget(widget:Widget): void {
    this.selectedWidget = widget;
    this.selectedClass.selected = widget.id;
  }

  clearSelected(): void {
      this.selectedWidget = undefined;
      this.selectedClass.selected = undefined;
  }
}
