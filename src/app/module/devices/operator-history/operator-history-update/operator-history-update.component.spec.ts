import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorHistoryUpdateComponent } from './operator-history-update.component';

describe('OperatorHistoryUpdateComponent', () => {
  let component: OperatorHistoryUpdateComponent;
  let fixture: ComponentFixture<OperatorHistoryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorHistoryUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorHistoryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
