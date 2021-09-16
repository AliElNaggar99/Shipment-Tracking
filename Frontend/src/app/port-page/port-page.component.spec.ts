import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortPageComponent } from './port-page.component';

describe('PortPageComponent', () => {
  let component: PortPageComponent;
  let fixture: ComponentFixture<PortPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
