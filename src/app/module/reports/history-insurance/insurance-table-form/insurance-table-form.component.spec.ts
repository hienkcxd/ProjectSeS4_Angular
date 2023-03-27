import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceTableFormComponent } from './insurance-table-form.component';

describe('InsuranceTableFormComponent', () => {
  let component: InsuranceTableFormComponent;
  let fixture: ComponentFixture<InsuranceTableFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceTableFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceTableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
