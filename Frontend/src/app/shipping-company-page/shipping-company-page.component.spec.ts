import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingCompanyPageComponent } from './shipping-company-page.component';

describe('ShippingCompanyPageComponent', () => {
  let component: ShippingCompanyPageComponent;
  let fixture: ComponentFixture<ShippingCompanyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingCompanyPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingCompanyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
