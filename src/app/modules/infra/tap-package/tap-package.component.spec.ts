import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapPackageComponent } from './tap-package.component';

describe('TapPackageComponent', () => {
  let component: TapPackageComponent;
  let fixture: ComponentFixture<TapPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
