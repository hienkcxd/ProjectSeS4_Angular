import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreListCreateComponent } from './store-list-create.component';

describe('StoreListCreateComponent', () => {
  let component: StoreListCreateComponent;
  let fixture: ComponentFixture<StoreListCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreListCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreListCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
