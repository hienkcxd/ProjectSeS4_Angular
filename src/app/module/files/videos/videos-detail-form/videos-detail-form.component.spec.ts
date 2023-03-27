import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosDetailFormComponent } from './videos-detail-form.component';

describe('VideosDetailFormComponent', () => {
  let component: VideosDetailFormComponent;
  let fixture: ComponentFixture<VideosDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosDetailFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideosDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
