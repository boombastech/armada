import { TestBed, inject } from '@angular/core/testing';

import { SquadronService } from './squadron.service';

describe('SquadronService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SquadronService]
    });
  });

  it('should ...', inject([SquadronService], (service: SquadronService) => {
    expect(service).toBeTruthy();
  }));
});
