import { TestBed } from '@angular/core/testing';

import { WeatherLocalstorageService } from './weather-localstorage.service';

describe('WeatherLocalstorageService', () => {
  let service: WeatherLocalstorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherLocalstorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
