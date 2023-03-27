import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceCreateFormComponent } from './device-create-form.component';

describe('DeviceCreateFormComponent', () => {
  let component: DeviceCreateFormComponent;
  let fixture: ComponentFixture<DeviceCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceCreateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
