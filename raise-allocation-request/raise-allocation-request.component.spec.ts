import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiseAllocationRequestComponent } from './raise-allocation-request.component';

describe('RaiseAllocationRequestComponent', () => {
  let component: RaiseAllocationRequestComponent;
  let fixture: ComponentFixture<RaiseAllocationRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaiseAllocationRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaiseAllocationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
