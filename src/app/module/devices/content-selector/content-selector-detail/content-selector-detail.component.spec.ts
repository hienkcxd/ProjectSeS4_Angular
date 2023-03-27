import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSelectorDetailComponent } from './content-selector-detail.component';

describe('ContentSelectorDetailComponent', () => {
  let component: ContentSelectorDetailComponent;
  let fixture: ComponentFixture<ContentSelectorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentSelectorDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentSelectorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
