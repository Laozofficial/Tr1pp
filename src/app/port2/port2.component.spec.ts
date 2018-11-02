import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Port2Component } from './port2.component';

describe('Port2Component', () => {
  let component: Port2Component;
  let fixture: ComponentFixture<Port2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Port2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Port2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
