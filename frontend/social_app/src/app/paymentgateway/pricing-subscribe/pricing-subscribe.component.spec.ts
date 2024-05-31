import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingSubscribeComponent } from './pricing-subscribe.component';

describe('PricingSubscribeComponent', () => {
  let component: PricingSubscribeComponent;
  let fixture: ComponentFixture<PricingSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PricingSubscribeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PricingSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
