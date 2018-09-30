import { TestBed } from '@angular/core/testing';

import { PhotoSearchResultService } from './photo-search-result.service';

describe('PhotoSearchResultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotoSearchResultService = TestBed.get(PhotoSearchResultService);
    expect(service).toBeTruthy();
  });
});
