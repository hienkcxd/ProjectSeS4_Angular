import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorHistoryDetailComponent } from './operator-history-detail.component';

describe('OperatorHistoryDetailComponent', () => {
  let component: OperatorHistoryDetailComponent;
  let fixture: ComponentFixture<OperatorHistoryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorHistoryDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorHistoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
