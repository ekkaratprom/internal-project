import { TestBed } from '@angular/core/testing';

import { CardFromService } from './card-from.service';

describe('CardFromService', () => {
  let service: CardFromService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardFromService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
