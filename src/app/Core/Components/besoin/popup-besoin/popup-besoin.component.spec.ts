import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupBesoinComponent } from './popup-besoin.component';

describe('PopupBesoinComponent', () => {
  let component: PopupBesoinComponent;
  let fixture: ComponentFixture<PopupBesoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupBesoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupBesoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
