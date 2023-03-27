import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDeviceMainComponent } from './group-device-main.component';

describe('GroupDeviceMainComponent', () => {
  let component: GroupDeviceMainComponent;
  let fixture: ComponentFixture<GroupDeviceMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupDeviceMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupDeviceMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
