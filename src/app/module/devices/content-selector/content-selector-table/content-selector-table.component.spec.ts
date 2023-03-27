import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSelectorTableComponent } from './content-selector-table.component';

describe('ContentSelectorTableComponent', () => {
  let component: ContentSelectorTableComponent;
  let fixture: ComponentFixture<ContentSelectorTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentSelectorTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentSelectorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
