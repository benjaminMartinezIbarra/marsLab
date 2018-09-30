import { TestBed } from '@angular/core/testing';

import { RoversService } from './rovers.service';

describe('RoversService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoversService = TestBed.get(RoversService);
    expect(service).toBeTruthy();
  });
});
