import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDropdownComponent } from './article-dropdown.component';

describe('ArticleDropdownComponent', () => {
  let component: ArticleDropdownComponent;
  let fixture: ComponentFixture<ArticleDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
