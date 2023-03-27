import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleTableFormComponent } from './schedule-table-form.component';

describe('ScheduleTableFormComponent', () => {
  let component: ScheduleTableFormComponent;
  let fixture: ComponentFixture<ScheduleTableFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleTableFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleTableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
