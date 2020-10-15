
import { AssignmentService } from './../shared/assignment.service';
import { Assignment, AssignmentResponse } from './../shared/assignment-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-card',
  templateUrl: './assignment-card.component.html',
  styleUrls: ['./assignment-card.component.css']
})
export class AssignmentCardComponent implements OnInit {
  searchText = '';
  completedStatusCheck = undefined;

  assignments: AssignmentResponse[] = [];

  constructor(private assignmentService: AssignmentService) { }

  ngOnInit(): void {
    this.getAllAssignmentCards();
  }

  getAllAssignmentCards(): void {
    try {
      this.assignmentService.getAllAssignments().subscribe(res => {
        this.assignments = res;
        console.log(this.assignments);
      });
    } catch (error) {
      console.error('GET all assignment fail');
    }


  }
}
