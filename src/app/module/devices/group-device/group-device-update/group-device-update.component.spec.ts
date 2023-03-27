import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDeviceUpdateComponent } from './group-device-update.component';

describe('GroupDeviceUpdateComponent', () => {
  let component: GroupDeviceUpdateComponent;
  let fixture: ComponentFixture<GroupDeviceUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupDeviceUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupDeviceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
