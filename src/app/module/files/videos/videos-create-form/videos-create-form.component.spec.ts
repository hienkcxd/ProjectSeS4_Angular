import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosCreateFormComponent } from './videos-create-form.component';

describe('VideosCreateFormComponent', () => {
  let component: VideosCreateFormComponent;
  let fixture: ComponentFixture<VideosCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosCreateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideosCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
