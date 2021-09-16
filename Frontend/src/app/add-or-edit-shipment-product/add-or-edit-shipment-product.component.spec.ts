import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditShipmentProductComponent } from './add-or-edit-shipment-product.component';

describe('AddOrEditShipmentProductComponent', () => {
  let component: AddOrEditShipmentProductComponent;
  let fixture: ComponentFixture<AddOrEditShipmentProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrEditShipmentProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditShipmentProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
