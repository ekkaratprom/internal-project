import { AssignmentService } from './shared/assignment.service';
import { Assignment, AssignmentResponse } from './shared/assignment-model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.css']
})
export class AssignmentListComponent implements OnInit {
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
