import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceDetailFormComponent } from './insurance-detail-form.component';

describe('InsuranceDetailFormComponent', () => {
  let component: InsuranceDetailFormComponent;
  let fixture: ComponentFixture<InsuranceDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceDetailFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
