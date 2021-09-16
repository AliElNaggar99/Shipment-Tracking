import { TestBed } from '@angular/core/testing';

import { ShipmentProductsService } from './shipment-products.service';

describe('ShipmentProductsService', () => {
  let service: ShipmentProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShipmentProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
