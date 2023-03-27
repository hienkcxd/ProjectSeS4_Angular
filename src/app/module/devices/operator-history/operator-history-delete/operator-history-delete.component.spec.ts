import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorHistoryDeleteComponent } from './operator-history-delete.component';

describe('OperatorHistoryDeleteComponent', () => {
  let component: OperatorHistoryDeleteComponent;
  let fixture: ComponentFixture<OperatorHistoryDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorHistoryDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorHistoryDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
