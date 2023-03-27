import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistDeleteFormComponent } from './playlist-delete-form.component';

describe('PlaylistDeleteFormComponent', () => {
  let component: PlaylistDeleteFormComponent;
  let fixture: ComponentFixture<PlaylistDeleteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistDeleteFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistDeleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
