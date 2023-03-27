import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistDetailFormComponent } from './playlist-detail-form.component';

describe('PlaylistDetailFormComponent', () => {
  let component: PlaylistDetailFormComponent;
  let fixture: ComponentFixture<PlaylistDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistDetailFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
