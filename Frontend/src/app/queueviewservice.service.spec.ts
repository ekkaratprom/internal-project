import { TestBed } from '@angular/core/testing';

import { QueueviewserviceService } from './queueviewservice.service';

describe('QueueviewserviceService', () => {
  let service: QueueviewserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueueviewserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
