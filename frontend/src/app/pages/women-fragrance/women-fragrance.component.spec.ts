import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenFragranceComponent } from './women-fragrance.component';

describe('WomenFragranceComponent', () => {
  let component: WomenFragranceComponent;
  let fixture: ComponentFixture<WomenFragranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenFragranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenFragranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
