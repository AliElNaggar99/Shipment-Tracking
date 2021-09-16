import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasingTeamPageComponent } from './purchasing-team-page.component';

describe('PurchasingTeamPageComponent', () => {
  let component: PurchasingTeamPageComponent;
  let fixture: ComponentFixture<PurchasingTeamPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasingTeamPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasingTeamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
