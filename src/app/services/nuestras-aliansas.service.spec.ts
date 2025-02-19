import { TestBed } from '@angular/core/testing';

import { NuestrasAliansasService } from './nuestras-aliansas.service';

describe('NuestrasAliansasService', () => {
  let service: NuestrasAliansasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuestrasAliansasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
