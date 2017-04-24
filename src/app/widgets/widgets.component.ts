import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {

  widgets: Array<Object> = [
  {
    'id': 1,
    'img': 'assets/img/number-1.png',
    'name': 'Widget 1',
    'description': 'This is a description',
    'featured': true
  },
  {
    'id': 2,
    'img': 'assets/img/number-2-blue-icon.png',
    'name': 'Widget 2',
    'description': 'This is a description!',
    'featured': false
  },
  {
    'id': 3,
    'img': 'assets/img/number-3-icon.png',
    'name': 'Widget 3',
    'description': 'This is a lovely widget',
    'featured': false
  }];

  selectedWidget: any;
  selectedClass: any = {
    selected: undefined
  };

  constructor() { console.log(this.constructor.name); }

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

  selWidget(widget:any): void {
    this.selectedWidget = widget;
    this.selectedClass.selected = widget.id;
  }

  clearSelected(): void {
      this.selectedWidget = undefined;
      this.selectedClass.selected = undefined;
  }
}
