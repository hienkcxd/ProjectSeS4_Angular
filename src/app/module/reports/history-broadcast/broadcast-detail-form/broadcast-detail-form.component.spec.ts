import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastDetailFormComponent } from './broadcast-detail-form.component';

describe('BroadcastDetailFormComponent', () => {
  let component: BroadcastDetailFormComponent;
  let fixture: ComponentFixture<BroadcastDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroadcastDetailFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BroadcastDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
