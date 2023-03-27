import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosTableFormComponent } from './videos-table-form.component';

describe('VideosTableFormComponent', () => {
  let component: VideosTableFormComponent;
  let fixture: ComponentFixture<VideosTableFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosTableFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideosTableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
