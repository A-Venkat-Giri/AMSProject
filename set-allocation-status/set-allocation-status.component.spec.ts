import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetAllocationStatusComponent } from './set-allocation-status.component';

describe('SetAllocationStatusComponent', () => {
  let component: SetAllocationStatusComponent;
  let fixture: ComponentFixture<SetAllocationStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetAllocationStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetAllocationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
