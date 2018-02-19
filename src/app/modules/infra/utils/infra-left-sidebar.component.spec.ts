import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraLeftSidebarComponent } from './infra-left-sidebar.component';

describe('InfraLeftSidebarComponent', () => {
  let component: InfraLeftSidebarComponent;
  let fixture: ComponentFixture<InfraLeftSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfraLeftSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfraLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
