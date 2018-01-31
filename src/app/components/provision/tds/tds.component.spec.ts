import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TDSComponent } from './tds.component';

describe('TDSComponent', () => {
  let component: TDSComponent;
  let fixture: ComponentFixture<TDSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TDSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TDSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
