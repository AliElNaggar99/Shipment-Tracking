import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShipmentPageComponent } from './add-shipment-page.component';

describe('AddShipmentPageComponent', () => {
  let component: AddShipmentPageComponent;
  let fixture: ComponentFixture<AddShipmentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddShipmentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShipmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
