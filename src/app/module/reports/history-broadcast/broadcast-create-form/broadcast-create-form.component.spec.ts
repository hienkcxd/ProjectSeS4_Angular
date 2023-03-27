import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastCreateFormComponent } from './broadcast-create-form.component';

describe('BroadcastCreateFormComponent', () => {
  let component: BroadcastCreateFormComponent;
  let fixture: ComponentFixture<BroadcastCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroadcastCreateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BroadcastCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
