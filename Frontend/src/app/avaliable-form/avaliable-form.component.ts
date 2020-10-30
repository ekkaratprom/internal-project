import { AssignmentService } from './../assignment-list/shared/assignment.service';
import { Assignment, CardForm } from './../assignment-list/shared/assignment-model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-avaliable-form',
  templateUrl: './avaliable-form.component.html',
  styleUrls: ['./avaliable-form.component.css']
})
export class AvaliableFormComponent implements OnInit {
  @Output() assignmentcardChange = new EventEmitter();
  @Output() submitCompleted = new EventEmitter();
  card: CardForm;

  projectList = [];
  assignmentList = [];
  rAssignmentList = [];

  constructor(private assignmentService: AssignmentService) { }

  public addCard = new FormGroup({
    assignmentId: new FormControl(null, Validators.compose([
      // Validators.required,
    ])),
    actualTime: new FormControl(null, Validators.compose([
      Validators.required,
      Validators.pattern('^[0-9].*$')
    ])),
    cardName: new FormControl(null, Validators.compose([
      Validators.required,
    ])),
  });

  ngOnInit(): void {
    this.getAllAssignment();
  }

  onSubmit(): void {
    const dateFormat = new Date('2020-10-30T03:48:49.759Z').toLocaleString('en-GB').substring(0, 10).split('/').join('-');
    this.card = {
      userId: 2,
      cardDate: new Date('2020-10-30'),
      cardName: this.addCard.get('cardName').value,
      actualTime: parseFloat(this.addCard.get('actualTime').value),
      // tslint:disable-next-line: radix
      assignmentId: parseInt(this.addCard.get('assignmentId').value),
    };
    console.log('card', this.card);

    this.assignmentService.addCard(this.card)
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

  getAllAssignment(): void {
    try {
      this.assignmentService.getAllAssignmentList().subscribe((res) => {
        this.assignmentList = res;
        console.log(this.assignmentList);
        this.assignmentList.forEach(e => {
          // this.rAssignmentList = [];
          const resultAssignmentList = {
            assignmentId: e.id,
            assignmentName: e.assignmentName,
          };
          this.rAssignmentList.push(resultAssignmentList);

        });
        console.log(this.rAssignmentList);
      });
    } catch (error) {
      console.error('GET all assignmentList fail');
    }
  }

  onCancel(): void {
    this.assignmentcardChange.emit('cancel');
  }

}
