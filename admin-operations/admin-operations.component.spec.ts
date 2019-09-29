import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOperationsComponent } from './admin-operations.component';

describe('AdminOperationsComponent', () => {
  let component: AdminOperationsComponent;
  let fixture: ComponentFixture<AdminOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
