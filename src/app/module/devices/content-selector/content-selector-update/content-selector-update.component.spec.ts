import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSelectorUpdateComponent } from './content-selector-update.component';

describe('ContentSelectorUpdateComponent', () => {
  let component: ContentSelectorUpdateComponent;
  let fixture: ComponentFixture<ContentSelectorUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentSelectorUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentSelectorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
