import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvDetailsComponent } from './env-details.component';

describe('EnvDetailsComponent', () => {
  let component: EnvDetailsComponent;
  let fixture: ComponentFixture<EnvDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
