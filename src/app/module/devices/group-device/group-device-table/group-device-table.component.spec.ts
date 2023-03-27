import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDeviceTableComponent } from './group-device-table.component';

describe('GroupDeviceTableComponent', () => {
  let component: GroupDeviceTableComponent;
  let fixture: ComponentFixture<GroupDeviceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupDeviceTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupDeviceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
