import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDeviceDeleteComponent } from './group-device-delete.component';

describe('GroupDeviceDeleteComponent', () => {
  let component: GroupDeviceDeleteComponent;
  let fixture: ComponentFixture<GroupDeviceDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupDeviceDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupDeviceDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
