import { TestBed } from '@angular/core/testing';

import { GeoipifyService } from './geoipify.service';

describe('GeoipifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeoipifyService = TestBed.get(GeoipifyService);
    expect(service).toBeTruthy();
  });
});
