import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapDeployComponent } from './tap-deploy.component';

describe('TapDeployComponent', () => {
  let component: TapDeployComponent;
  let fixture: ComponentFixture<TapDeployComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapDeployComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapDeployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
