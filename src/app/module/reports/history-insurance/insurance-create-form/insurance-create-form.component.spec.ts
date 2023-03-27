import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceCreateFormComponent } from './insurance-create-form.component';

describe('InsuranceCreateFormComponent', () => {
  let component: InsuranceCreateFormComponent;
  let fixture: ComponentFixture<InsuranceCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceCreateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
