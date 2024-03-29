import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSidebarComponent } from './page-sidebar.component';

describe('PageSidebarComponent', () => {
  let component: PageSidebarComponent;
  let fixture: ComponentFixture<PageSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
