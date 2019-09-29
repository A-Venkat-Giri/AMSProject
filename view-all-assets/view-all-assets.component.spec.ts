import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllAssetsComponent } from './view-all-assets.component';

describe('ViewAllAssetsComponent', () => {
  let component: ViewAllAssetsComponent;
  let fixture: ComponentFixture<ViewAllAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
