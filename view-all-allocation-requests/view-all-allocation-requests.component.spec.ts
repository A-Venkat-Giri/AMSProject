import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllAllocationRequestsComponent } from './view-all-allocation-requests.component';

describe('ViewAllAllocationRequestsComponent', () => {
  let component: ViewAllAllocationRequestsComponent;
  let fixture: ComponentFixture<ViewAllAllocationRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllAllocationRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllAllocationRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
