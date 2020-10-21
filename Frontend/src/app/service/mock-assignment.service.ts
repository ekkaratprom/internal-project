import { AssignmentResponse } from './../assignment-list/shared/assignment-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class MockAssignmentService {
  assignmenFakeResponse: AssignmentResponse[] = [{
    assignmentName: 'Ekkarat',
    actualTime: 0,
    projectId: 1,
    billableTime: 2,
    estimateTime: 2,
  },
  {
    assignmentName: 'Somkiat',
    actualTime: 0,
    projectId: 1,
    billableTime: 2,
    estimateTime: 2,
  }, {
    assignmentName: 'Narongrit',
    actualTime: 0,
    projectId: 1,
    billableTime: 2,
    estimateTime: 2,
  }

  ]

  constructor(private httpClient: HttpClient) { }

  getAllAssignments(): AssignmentResponse[] {
    return this.assignmenFakeResponse;
  }
}
