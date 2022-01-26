import { TestBed } from '@angular/core/testing';

import { AktualnyPacientService } from './aktualny-pacient.service';

describe('AktualnyPacientService', () => {
  let service: AktualnyPacientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AktualnyPacientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
