import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearBorkersComponent } from './clear-borkers.component';

describe('ClearBorkersComponent', () => {
  let component: ClearBorkersComponent;
  let fixture: ComponentFixture<ClearBorkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearBorkersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearBorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
