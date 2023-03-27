import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleDeleteFormComponent } from './schedule-delete-form.component';

describe('ScheduleDeleteFormComponent', () => {
  let component: ScheduleDeleteFormComponent;
  let fixture: ComponentFixture<ScheduleDeleteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleDeleteFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleDeleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
