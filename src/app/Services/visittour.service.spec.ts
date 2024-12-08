import { TestBed } from '@angular/core/testing';

import { VisittourService } from './visittour.service';

describe('VisittourService', () => {
  let service: VisittourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisittourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
