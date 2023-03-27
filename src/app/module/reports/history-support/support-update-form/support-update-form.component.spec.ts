import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportUpdateFormComponent } from './support-update-form.component';

describe('SupportUpdateFormComponent', () => {
  let component: SupportUpdateFormComponent;
  let fixture: ComponentFixture<SupportUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportUpdateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
