import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistCreateFormComponent } from './playlist-create-form.component';

describe('PlaylistCreateFormComponent', () => {
  let component: PlaylistCreateFormComponent;
  let fixture: ComponentFixture<PlaylistCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistCreateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
