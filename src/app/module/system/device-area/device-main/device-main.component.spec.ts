import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceMainComponent } from './device-main.component';

describe('DeviceMainComponent', () => {
  let component: DeviceMainComponent;
  let fixture: ComponentFixture<DeviceMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
