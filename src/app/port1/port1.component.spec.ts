import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Port1Component } from './port1.component';

describe('Port1Component', () => {
  let component: Port1Component;
  let fixture: ComponentFixture<Port1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Port1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Port1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
