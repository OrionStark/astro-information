import { TestBed, inject } from '@angular/core/testing';

import { GoogleServicesService } from './google-services.service';

describe('GoogleServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleServicesService]
    });
  });

  it('should be created', inject([GoogleServicesService], (service: GoogleServicesService) => {
    expect(service).toBeTruthy();
  }));
});
