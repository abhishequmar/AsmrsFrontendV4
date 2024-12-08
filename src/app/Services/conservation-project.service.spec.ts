import { TestBed } from '@angular/core/testing';

import { ConservationProjectService } from './conservation-project.service';

describe('ConservationProjectService', () => {
  let service: ConservationProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConservationProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
