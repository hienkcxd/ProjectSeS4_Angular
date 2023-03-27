import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSelectorMainComponent } from './content-selector-main.component';

describe('ContentSelectorMainComponent', () => {
  let component: ContentSelectorMainComponent;
  let fixture: ComponentFixture<ContentSelectorMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentSelectorMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentSelectorMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
