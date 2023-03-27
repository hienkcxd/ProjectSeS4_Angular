import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreListDetailComponent } from './store-list-detail.component';

describe('StoreListDetailComponent', () => {
  let component: StoreListDetailComponent;
  let fixture: ComponentFixture<StoreListDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreListDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
