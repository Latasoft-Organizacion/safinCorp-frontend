import { TestBed } from '@angular/core/testing';

import { SegurosCompanyService } from './seguros-company.service';

describe('SegurosCompanyService', () => {
  let service: SegurosCompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SegurosCompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
