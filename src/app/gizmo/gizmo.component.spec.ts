/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GizmoComponent } from './gizmo.component';

describe('GizmoComponent', () => {
  let component: GizmoComponent;
  let fixture: ComponentFixture<GizmoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GizmoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GizmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
