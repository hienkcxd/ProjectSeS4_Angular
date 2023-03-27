import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistUpdateFormComponent } from './playlist-update-form.component';

describe('PlaylistUpdateFormComponent', () => {
  let component: PlaylistUpdateFormComponent;
  let fixture: ComponentFixture<PlaylistUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistUpdateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
