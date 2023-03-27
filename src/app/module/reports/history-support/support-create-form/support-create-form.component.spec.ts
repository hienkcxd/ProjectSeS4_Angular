import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportCreateFormComponent } from './support-create-form.component';

describe('SupportCreateFormComponent', () => {
  let component: SupportCreateFormComponent;
  let fixture: ComponentFixture<SupportCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportCreateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
