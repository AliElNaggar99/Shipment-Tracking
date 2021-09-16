import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewShipmentProductsComponent } from './view-shipment-products.component';

describe('ViewShipmentProductsComponent', () => {
  let component: ViewShipmentProductsComponent;
  let fixture: ComponentFixture<ViewShipmentProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewShipmentProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewShipmentProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
