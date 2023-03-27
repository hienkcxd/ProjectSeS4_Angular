import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreListEditComponent } from './store-list-edit.component';

describe('StoreListEditComponent', () => {
  let component: StoreListEditComponent;
  let fixture: ComponentFixture<StoreListEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreListEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
