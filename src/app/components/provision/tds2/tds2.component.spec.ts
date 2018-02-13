import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TDS2Component } from './tds2.component';

describe('TDS2Component', () => {
  let component: TDS2Component;
  let fixture: ComponentFixture<TDS2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TDS2Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TDS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
