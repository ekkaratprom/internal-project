import { TestBed } from '@angular/core/testing';

import { MockAssignmentService } from './mock-assignment.service';

describe('MockAssignmentService', () => {
  let service: MockAssignmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockAssignmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
