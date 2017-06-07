import { TestBed, inject } from '@angular/core/testing';

import { FleetValidationService } from './fleet-validation.service';

describe('FleetValidationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FleetValidationService]
    });
  });

  it('should ...', inject([FleetValidationService], (service: FleetValidationService) => {
    expect(service).toBeTruthy();
  }));
});
