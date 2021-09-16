import { TestBed } from '@angular/core/testing';

import { PurchasingTeamService } from './purchasing-team.service';

describe('PurchasingTeamService', () => {
  let service: PurchasingTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchasingTeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
