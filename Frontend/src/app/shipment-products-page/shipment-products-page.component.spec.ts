import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentProductsPageComponent } from './shipment-products-page.component';

describe('ShipmentProductsPageComponent', () => {
  let component: ShipmentProductsPageComponent;
  let fixture: ComponentFixture<ShipmentProductsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentProductsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
