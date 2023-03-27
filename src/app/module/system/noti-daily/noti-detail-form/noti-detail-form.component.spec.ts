import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotiDetailFormComponent } from './noti-detail-form.component';

describe('NotiDetailFormComponent', () => {
  let component: NotiDetailFormComponent;
  let fixture: ComponentFixture<NotiDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotiDetailFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotiDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
