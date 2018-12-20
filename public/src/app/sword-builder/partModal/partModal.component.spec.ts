/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PartModalComponent } from './partModal.component';

describe('PartModalComponent', () => {
  let component: PartModalComponent;
  let fixture: ComponentFixture<PartModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
