import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllocationStatusComponent } from './view-allocation-status.component';

describe('ViewAllocationStatusComponent', () => {
  let component: ViewAllocationStatusComponent;
  let fixture: ComponentFixture<ViewAllocationStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllocationStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllocationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
