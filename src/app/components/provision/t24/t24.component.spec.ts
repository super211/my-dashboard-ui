import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T24Component } from './t24.component';

describe('T24Component', () => {
  let component: T24Component;
  let fixture: ComponentFixture<T24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
