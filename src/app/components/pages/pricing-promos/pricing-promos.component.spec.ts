import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingPromosComponent } from './pricing-promos.component';

describe('PricingPromosComponent', () => {
  let component: PricingPromosComponent;
  let fixture: ComponentFixture<PricingPromosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingPromosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingPromosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
