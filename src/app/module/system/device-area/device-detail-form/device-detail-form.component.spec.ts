import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceDetailFormComponent } from './device-detail-form.component';

describe('DeviceDetailFormComponent', () => {
  let component: DeviceDetailFormComponent;
  let fixture: ComponentFixture<DeviceDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceDetailFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
