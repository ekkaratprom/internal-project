import { AssignmentService } from './../assignment-list/shared/assignment.service';
import { Assignment } from './../assignment-list/shared/assignment-model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private assignmentService: AssignmentService,private router: Router) { }


  public addAssignment = new FormGroup({
    assignmentName: new FormControl(null, Validators.compose([
      Validators.required,
    ])),
    billableTime: new FormControl(null, Validators.compose([
      Validators.pattern('^[0-9].*$')
    ])),
    estimateTime: new FormControl(null, Validators.compose([
      Validators.required,
      Validators.pattern('^[0-9].*$')
    ])),
    projectId: new FormControl('1', Validators.compose([
      Validators.required,
    ])),
  });

  ngOnInit(): void {
    this.getAllProject();
  }

  onSubmit(): void {

    this.assignment = {
      assignmentName: this.addAssignment.get('assignmentName').value,
      billableTime: parseFloat(this.addAssignment.get('billableTime').value),
      estimateTime: parseFloat(this.addAssignment.get('estimateTime').value),
      completedStatus: false,
      // tslint:disable-next-line: radix
      projectId: parseInt(this.addAssignment.get('projectId').value),
    };
    console.log(this.assignment);

    this.assignmentService.addAssignment(this.assignment)
      .subscribe((r) => {
        console.log(r);
        this.submitCompleted.emit();
      });
  }

  getAllProject(): void {
    try {
      this.assignmentService.getAllProject().subscribe((res) => {
        this.projectList = res;
      });
    } catch (error) {
      console.error('GET all project fail');
    }
  }

  onCancel(): void {
    this.assignmentcardChange.emit('cancel');
  }

}
