import { AssignmentService } from './../assignment-list/shared/assignment.service';
import { Assignment } from './../assignment-list/shared/assignment-model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCalendar, NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-assignment-form',
  templateUrl: './assignment-form.component.html',
  styleUrls: ['./assignment-form.component.css']
})
export class AssignmentFormComponent implements OnInit {
  @Output() assignmentcardChange = new EventEmitter();
  @Output() submitCompleted = new EventEmitter();
  @Output() newAssignment: EventEmitter<any> = new EventEmitter<any>();
  assignment: Assignment;
  projectList = [];
  endDatePick: NgbDateStruct;
  today = this.calendar.getToday();
  markDisabled;
  assignmentForm: FormGroup;

  submitted = false;

  public formControl: FormControl = new FormControl(null);
  // public assignmentName: FormControl = new FormControl(null);



  constructor(private form: FormBuilder, private assignmentService: AssignmentService, private router: Router, private calendar: NgbCalendar) {
    this.markDisabled = (date: NgbDate) => calendar.getWeekday(date) >= 6;
    this.assignmentFormValidation();
  }


  public addAssignment = new FormGroup({
    assignmentName: new FormControl(null, Validators.compose([
      Validators.required,
      Validators.pattern('[\\w\\-\\s\\/]+'), Validators.minLength(3), Validators.maxLength(30)
    ])),
    billableTime: new FormControl(null, Validators.compose([
      Validators.required,
      Validators.pattern('^[1-9].*$'),
    ])),
    estimateTime: new FormControl(null, Validators.compose([
      Validators.required,
      Validators.pattern('^[1-9].*$'),
    ])),
    projectId: new FormControl('1', Validators.compose([
      Validators.required,
    ])),
  });

  ngOnInit(): void {
    this.getAllProject();
    this.endDatePick = this.today;

  }

  onSubmit(): void {
    const date = `${this.endDatePick.year}-${this.endDatePick.month}-${this.endDatePick.day}`;
    const day = new Date(date);
    const fixDate = day.setDate(day.getDate() + 1);
    const fixDay = new Date(fixDate);



    let daySent;
    if (this.endDatePick.day < 10) {
      if (this.endDatePick.month < 10) {
        daySent = fixDay.toISOString().substr(0, 10);
      }
      else if (this.endDatePick.month >= 10) {
        const dayOverMonth = new Date(date);
        const fixDateOverMonth = dayOverMonth.setDate(dayOverMonth.getDate() + 1);
        const fixDayOverMonth = new Date(fixDateOverMonth);
        daySent = fixDayOverMonth.toISOString().substr(0, 10);
      }
    } else {
      if (this.endDatePick.month < 10) {
        const dayOverMonth = new Date(date);
        const fixDateOverMonth = dayOverMonth.setDate(dayOverMonth.getDate() + 1);
        const fixDayOverMonth = new Date(fixDateOverMonth);
        daySent = fixDayOverMonth.toISOString().substr(0, 10);
      }
      else if (this.endDatePick.month >= 10) {
        const dayOverMonth = new Date(date);
        const fixDateOverMonth = dayOverMonth.setDate(dayOverMonth.getDate());
        const fixDayOverMonth = new Date(fixDateOverMonth);
        daySent = fixDayOverMonth.toISOString().substr(0, 10);
      }
    }

    // console.log('Date', date);
    // console.log('Day', day);
    // console.log('fixDate', fixDate);
    // console.log('fixDay', fixDay);

    this.assignment = {
      assignmentName: this.addAssignment.get('assignmentName').value,
      billableTime: parseFloat(this.addAssignment.get('billableTime').value),
      estimateTime: parseFloat(this.addAssignment.get('estimateTime').value),
      completedStatus: false,
      endDate: daySent,
      // tslint:disable-next-line: radix
      projectId: parseInt(this.addAssignment.get('projectId').value),
    };
    console.log('assignment', this.assignment);

    this.assignmentService.addAssignment(this.assignment)
      .subscribe((r) => {
        console.log('r', r);
        this.submitCompleted.emit();
        // this.newAssignment.emit(this.assignment);
        // console.log('newAssignment', this.newAssignment);
      });
  }

  onSubmitNotComplete() {
    this.submitted = true;
    this.submitCompleted.emit();
  }

  assignmentFormValidation() {
    this.assignmentForm = this.form.group({
      assignmentName: ['', Validators.compose([Validators.required, Validators.minLength(3)]), Validators.pattern('[\\w\\-\\s\\/]+')],
      billableTime: [null, Validators.compose([Validators.required, Validators.pattern('^[1-9].*$')])],
      estimateTime: [null, Validators.compose([Validators.required, Validators.pattern('^[1-9].*$')])],
      projectId: [1, Validators.compose([Validators.required])]
    })
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

  // clicked(input, status) {
  //   let inputCheck = input;
  //   if (inputCheck == 'estimate' && status == true) {
  //     this.estimateInput = true;
  //   }
  //   if (inputCheck == 'actual' && status == true) {
  //     this.billableInput = true;
  //   }
  //   if (inputCheck == 'assignment' && status == true) {
  //     this.assignmentInput = true;
  //   }
  // }

}
