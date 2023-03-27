import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreListDeleteComponent } from './store-list-delete.component';

describe('StoreListDeleteComponent', () => {
  let component: StoreListDeleteComponent;
  let fixture: ComponentFixture<StoreListDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreListDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreListDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
