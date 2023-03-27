import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastTableFormComponent } from './broadcast-table-form.component';

describe('BroadcastTableFormComponent', () => {
  let component: BroadcastTableFormComponent;
  let fixture: ComponentFixture<BroadcastTableFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroadcastTableFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BroadcastTableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
