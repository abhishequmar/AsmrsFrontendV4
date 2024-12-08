import { TestBed } from '@angular/core/testing';

import { ArtifactTrackingService } from './artifact-tracking.service';

describe('ArtifactTrackingService', () => {
  let service: ArtifactTrackingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtifactTrackingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
