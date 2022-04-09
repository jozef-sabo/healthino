import { TestBed } from '@angular/core/testing';

import { CurrentPatientService } from './current-patient.service';

describe('CurrentPatientService', () => {
  let service: CurrentPatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentPatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
