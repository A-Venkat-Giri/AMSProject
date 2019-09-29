import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveAssetComponent } from './remove-asset.component';

describe('RemoveAssetComponent', () => {
  let component: RemoveAssetComponent;
  let fixture: ComponentFixture<RemoveAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
