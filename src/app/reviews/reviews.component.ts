import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})

export class ReviewsComponent implements OnInit {

  constructor() {
    console.log(this.constructor.name);
  }

  ngOnInit() {
    console.log(this.constructor.name, 'ngOnInit()');
  }

}
