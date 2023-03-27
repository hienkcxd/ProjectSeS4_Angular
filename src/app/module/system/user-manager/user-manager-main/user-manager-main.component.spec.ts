import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagerMainComponent } from './user-manager-main.component';

describe('UserManagerMainComponent', () => {
  let component: UserManagerMainComponent;
  let fixture: ComponentFixture<UserManagerMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserManagerMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserManagerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
