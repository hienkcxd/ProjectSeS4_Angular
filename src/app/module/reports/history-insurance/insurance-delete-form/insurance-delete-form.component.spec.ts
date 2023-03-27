import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceDeleteFormComponent } from './insurance-delete-form.component';

describe('InsuranceDeleteFormComponent', () => {
  let component: InsuranceDeleteFormComponent;
  let fixture: ComponentFixture<InsuranceDeleteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceDeleteFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceDeleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
