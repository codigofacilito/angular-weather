import { TestBed, inject } from '@angular/core/testing';

import { ForecastService } from './forecast.service';

describe('ForecastServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForecastService]
    });
  });

  it('should be created', inject([ForecastService], (service: ForecastService) => {
    expect(service).toBeTruthy();
  }));
});
