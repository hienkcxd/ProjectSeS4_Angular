import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDeviceDetailComponent } from './group-device-detail.component';

describe('GroupDeviceDetailComponent', () => {
  let component: GroupDeviceDetailComponent;
  let fixture: ComponentFixture<GroupDeviceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupDeviceDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupDeviceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
