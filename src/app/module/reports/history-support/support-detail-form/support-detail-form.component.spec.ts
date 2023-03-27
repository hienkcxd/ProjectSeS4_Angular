import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportDetailFormComponent } from './support-detail-form.component';

describe('SupportDetailFormComponent', () => {
  let component: SupportDetailFormComponent;
  let fixture: ComponentFixture<SupportDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportDetailFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
