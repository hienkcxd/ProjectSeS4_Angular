import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSelectorDeleteComponent } from './content-selector-delete.component';

describe('ContentSelectorDeleteComponent', () => {
  let component: ContentSelectorDeleteComponent;
  let fixture: ComponentFixture<ContentSelectorDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentSelectorDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentSelectorDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
