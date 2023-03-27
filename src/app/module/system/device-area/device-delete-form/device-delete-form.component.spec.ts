import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceDeleteFormComponent } from './device-delete-form.component';

describe('DeviceDeleteFormComponent', () => {
  let component: DeviceDeleteFormComponent;
  let fixture: ComponentFixture<DeviceDeleteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceDeleteFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceDeleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
