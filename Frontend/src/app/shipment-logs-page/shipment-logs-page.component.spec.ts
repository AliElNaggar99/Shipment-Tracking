import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentLogsPageComponent } from './shipment-logs-page.component';

describe('ShipmentLogsPageComponent', () => {
  let component: ShipmentLogsPageComponent;
  let fixture: ComponentFixture<ShipmentLogsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentLogsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentLogsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
