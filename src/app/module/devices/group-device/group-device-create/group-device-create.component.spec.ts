import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDeviceCreateComponent } from './group-device-create.component';

describe('GroupDeviceCreateComponent', () => {
  let component: GroupDeviceCreateComponent;
  let fixture: ComponentFixture<GroupDeviceCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupDeviceCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupDeviceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
