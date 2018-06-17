import { TestBed, inject } from '@angular/core/testing';

import { WorldApiService } from './world-api.service';

describe('WorldApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorldApiService]
    });
  });

  it('should be created', inject([WorldApiService], (service: WorldApiService) => {
    expect(service).toBeTruthy();
  }));
});
