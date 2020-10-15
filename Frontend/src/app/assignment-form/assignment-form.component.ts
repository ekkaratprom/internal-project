import { Assignment } from './../queue-view/assignment-list/shared/assignment-model';
import { AssignmentService } from './../queue-view/assignment-list/shared/assignment.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-assignment-form',
  templateUrl: './assignment-form.component.html',
  styleUrls: ['./assignment-form.component.css']
})
export class AssignmentFormComponent implements OnInit {
  @Output() assignmentcardChange = new EventEmitter();
  @Output() submitCompleted = new EventEmitter();
  assignment: Assignment;
  projectList = [];
  constructor() { }

  ngOnInit(): void {
  }

}
