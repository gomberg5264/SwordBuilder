/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PartListerComponent } from './partLister.component';

describe('PartListerComponent', () => {
  let component: PartListerComponent;
  let fixture: ComponentFixture<PartListerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartListerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartListerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
