import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotiEditFormComponent } from './noti-edit-form.component';

describe('NotiEditFormComponent', () => {
  let component: NotiEditFormComponent;
  let fixture: ComponentFixture<NotiEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotiEditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotiEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
