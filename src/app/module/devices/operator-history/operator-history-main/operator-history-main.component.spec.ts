import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorHistoryMainComponent } from './operator-history-main.component';

describe('OperatorHistoryMainComponent', () => {
  let component: OperatorHistoryMainComponent;
  let fixture: ComponentFixture<OperatorHistoryMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorHistoryMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorHistoryMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
