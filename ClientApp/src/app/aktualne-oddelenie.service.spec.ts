import { TestBed } from '@angular/core/testing';

import { AktualneOddelenieService } from './aktualne-oddelenie.service';

describe('AktualneZobrazenieService', () => {
  let service: AktualneOddelenieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AktualneOddelenieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
