import { TestBed } from '@angular/core/testing';

import { ExcavationService } from './excavation.service';

describe('ExcavationService', () => {
  let service: ExcavationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcavationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
