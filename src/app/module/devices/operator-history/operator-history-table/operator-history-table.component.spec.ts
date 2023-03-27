import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorHistoryTableComponent } from './operator-history-table.component';

describe('OperatorHistoryTableComponent', () => {
  let component: OperatorHistoryTableComponent;
  let fixture: ComponentFixture<OperatorHistoryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorHistoryTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorHistoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
