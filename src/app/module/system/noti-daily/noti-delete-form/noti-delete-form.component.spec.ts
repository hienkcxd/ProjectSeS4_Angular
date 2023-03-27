import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotiDeleteFormComponent } from './noti-delete-form.component';

describe('NotiDeleteFormComponent', () => {
  let component: NotiDeleteFormComponent;
  let fixture: ComponentFixture<NotiDeleteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotiDeleteFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotiDeleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
