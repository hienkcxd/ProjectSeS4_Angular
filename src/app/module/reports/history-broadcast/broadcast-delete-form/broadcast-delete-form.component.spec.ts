import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastDeleteFormComponent } from './broadcast-delete-form.component';

describe('BroadcastDeleteFormComponent', () => {
  let component: BroadcastDeleteFormComponent;
  let fixture: ComponentFixture<BroadcastDeleteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroadcastDeleteFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BroadcastDeleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
