import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerOperationsComponent } from './manager-operations.component';

describe('ManagerOperationsComponent', () => {
  let component: ManagerOperationsComponent;
  let fixture: ComponentFixture<ManagerOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
