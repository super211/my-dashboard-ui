import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcibDeployComponent } from './tcib-deploy.component';

describe('TcibDeployComponent', () => {
  let component: TcibDeployComponent;
  let fixture: ComponentFixture<TcibDeployComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcibDeployComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcibDeployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
