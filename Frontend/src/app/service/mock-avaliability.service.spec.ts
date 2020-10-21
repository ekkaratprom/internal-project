import { TestBed } from '@angular/core/testing';

import { MockAvaliabilityService } from './mock-avaliability.service';

describe('MockAvaliabilityService', () => {
  let service: MockAvaliabilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockAvaliabilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
