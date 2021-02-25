import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingOrderingComponent } from './pricing-ordering.component';

describe('PricingOrderingComponent', () => {
  let component: PricingOrderingComponent;
  let fixture: ComponentFixture<PricingOrderingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingOrderingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingOrderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
