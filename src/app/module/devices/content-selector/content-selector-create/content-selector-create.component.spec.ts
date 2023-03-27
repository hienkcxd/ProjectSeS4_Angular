import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSelectorCreateComponent } from './content-selector-create.component';

describe('ContentSelectorCreateComponent', () => {
  let component: ContentSelectorCreateComponent;
  let fixture: ComponentFixture<ContentSelectorCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentSelectorCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentSelectorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
