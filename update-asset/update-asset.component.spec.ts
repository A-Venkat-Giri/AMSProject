import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAssetComponent } from './update-asset.component';

describe('UpdateAssetComponent', () => {
  let component: UpdateAssetComponent;
  let fixture: ComponentFixture<UpdateAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
