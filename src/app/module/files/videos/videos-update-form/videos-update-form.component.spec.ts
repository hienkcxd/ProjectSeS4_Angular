import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosUpdateFormComponent } from './videos-update-form.component';

describe('VideosUpdateFormComponent', () => {
  let component: VideosUpdateFormComponent;
  let fixture: ComponentFixture<VideosUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosUpdateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideosUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
