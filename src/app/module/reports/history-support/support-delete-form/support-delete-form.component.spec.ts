import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportDeleteFormComponent } from './support-delete-form.component';

describe('SupportDeleteFormComponent', () => {
  let component: SupportDeleteFormComponent;
  let fixture: ComponentFixture<SupportDeleteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportDeleteFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportDeleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
