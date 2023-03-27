import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotiCreateFormComponent } from './noti-create-form.component';

describe('NotiCreateFormComponent', () => {
  let component: NotiCreateFormComponent;
  let fixture: ComponentFixture<NotiCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotiCreateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotiCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
