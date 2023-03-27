import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistTableFormComponent } from './playlist-table-form.component';

describe('PlaylistTableFormComponent', () => {
  let component: PlaylistTableFormComponent;
  let fixture: ComponentFixture<PlaylistTableFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistTableFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistTableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
