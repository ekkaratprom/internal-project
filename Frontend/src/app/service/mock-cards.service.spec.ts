import { TestBed } from '@angular/core/testing';

import { MockCardsService } from './mock-cards.service';

describe('MockCardsService', () => {
  let service: MockCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
