import { TestBed } from '@angular/core/testing';

import { CurrentDepartmentService } from './current-department.service';

describe('AktualneZobrazenieService', () => {
  let service: CurrentDepartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentDepartmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
