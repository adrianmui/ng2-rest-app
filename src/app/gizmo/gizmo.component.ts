import { GizmoService } from '../gizmo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gizmo',
  templateUrl: './gizmo.component.html',
  styleUrls: ['./gizmo.component.css']
})
export class GizmoComponent implements OnInit {
  stuff: Array<any>;

  constructor(
    private gizmoService: GizmoService
  ) { }

  ngOnInit() {
    this.stuff = this.gizmoService.getStuff();
  }

  firstLetter(thing: string ): string {
    return thing.charAt(0);
  }
}
