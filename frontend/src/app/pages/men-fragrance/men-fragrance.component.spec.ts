import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenFragranceComponent } from './men-fragrance.component';

describe('MenFragranceComponent', () => {
  let component: MenFragranceComponent;
  let fixture: ComponentFixture<MenFragranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenFragranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenFragranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
