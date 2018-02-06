import { TestBed, inject } from '@angular/core/testing';

import { AuroraLiveService } from './aurora-live.service';

describe('AuroraLiveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuroraLiveService]
    });
  });

  it('should be created', inject([AuroraLiveService], (service: AuroraLiveService) => {
    expect(service).toBeTruthy();
  }));
});
