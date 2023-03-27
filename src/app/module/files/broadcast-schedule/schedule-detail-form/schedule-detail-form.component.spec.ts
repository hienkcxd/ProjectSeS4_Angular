import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleDetailFormComponent } from './schedule-detail-form.component';

describe('ScheduleDetailFormComponent', () => {
  let component: ScheduleDetailFormComponent;
  let fixture: ComponentFixture<ScheduleDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleDetailFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
