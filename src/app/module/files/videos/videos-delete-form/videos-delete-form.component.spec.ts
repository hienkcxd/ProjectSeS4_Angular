import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosDeleteFormComponent } from './videos-delete-form.component';

describe('VideosDeleteFormComponent', () => {
  let component: VideosDeleteFormComponent;
  let fixture: ComponentFixture<VideosDeleteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosDeleteFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideosDeleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
