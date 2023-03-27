import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastUpdateFormComponent } from './broadcast-update-form.component';

describe('BroadcastUpdateFormComponent', () => {
  let component: BroadcastUpdateFormComponent;
  let fixture: ComponentFixture<BroadcastUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroadcastUpdateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BroadcastUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
