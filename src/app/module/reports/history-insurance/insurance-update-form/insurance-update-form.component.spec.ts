import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceUpdateFormComponent } from './insurance-update-form.component';

describe('InsuranceUpdateFormComponent', () => {
  let component: InsuranceUpdateFormComponent;
  let fixture: ComponentFixture<InsuranceUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceUpdateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
