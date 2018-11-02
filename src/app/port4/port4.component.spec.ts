import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Port4Component } from './port4.component';

describe('Port4Component', () => {
  let component: Port4Component;
  let fixture: ComponentFixture<Port4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Port4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Port4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
