import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportTableFormComponent } from './support-table-form.component';

describe('SupportTableFormComponent', () => {
  let component: SupportTableFormComponent;
  let fixture: ComponentFixture<SupportTableFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportTableFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportTableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
