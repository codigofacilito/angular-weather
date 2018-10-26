import { TestBed, inject } from '@angular/core/testing';

import { CurrentWeatherService } from './current-weather.service';

describe('CurrentWeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentWeatherService]
    });
  });

  it('should be created', inject([CurrentWeatherService], (service: CurrentWeatherService) => {
    expect(service).toBeTruthy();
  }));
});
