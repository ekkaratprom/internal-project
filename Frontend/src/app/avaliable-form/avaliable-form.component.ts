import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AvailabilityService } from './../avaliable-time/shared/availability.service';
import { Actual } from './../avaliable-time/shared/availiability-model';
import { AssignmentService } from './../assignment-list/shared/assignment.service';
import { Assignment, CardForm, CardList } from './../assignment-list/shared/assignment-model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avaliable-form',
  templateUrl: './avaliable-form.component.html',
  styleUrls: ['./avaliable-form.component.css']
})
export class AvaliableFormComponent implements OnInit {
  @Input() modalValue: any;
  @Output() itemCardChange = new EventEmitter<number>();
  @Output() assignmentcardChange = new EventEmitter();
  @Output() submitCompleted = new EventEmitter();
  @Output() submitUpdateCardCompleted = new EventEmitter();
  card: CardForm;
  actual: Actual;
  modalReference: NgbModalRef;
  projectList = [];
  assignmentList = [];
  rAssignmentList = [];
  cardsData = [];
  status;
  // cardId;""

  constructor(private ngbmodal: NgbModal, private assignmentService: AssignmentService,
    private router: Router, private availabilityService: AvailabilityService) { }

  public addCard = new FormGroup({
    assignmentId: new FormControl(null, Validators.compose([
      Validators.required,
    ])),
    actualTime: new FormControl(null, Validators.compose([
      Validators.required,
      Validators.pattern('^[1-9].*$'),
      Validators.max(24),
      Validators.min(1)
    ])),
    cardName: new FormControl(null, Validators.compose([
      Validators.required,
      Validators.pattern('[\\w\\-\\s\\/]+')
    ])),
  });

  public editCard = new FormGroup({
    cardActualTime: new FormControl(null, Validators.compose([
      Validators.required,
      Validators.pattern('^[1-9].*$'),
      Validators.max(24),
      Validators.min(1)
    ])),
  });

  ngOnInit(): void {
    this.getAllAssignment();
    // console.log('************', this.modalValue);
    // console.log('************', this.modalValue[0].cards);
    this.cardsData = [this.modalValue[0].cards];
  }

  onSubmit(): void {
    // const dateFormat = new Date('2020-10-30T03:48:49.759Z').toLocaleString('en-GB').substring(0, 10).split('/').join('-');
    this.card = {
      userId: this.modalValue[1].userId,
      cardDate: this.modalValue[0].cards.cardDate,
      cardName: this.addCard.get('cardName').value,
      actualTime: parseFloat(this.addCard.get('actualTime').value),
      // tslint:disable-next-line: radix
      assignmentId: parseInt(this.addCard.get('assignmentId').value),
    };
    console.log('card', this.card);

    this.assignmentService.addCard(this.card)
      .subscribe((r) => {
        console.log(r);
        // this.router.navigateByUrl('/available-form');
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
        // console.log(this.assignmentList);
        this.assignmentList.forEach(e => {
          // this.rAssignmentList = [];
          const resultAssignmentList = {
            assignmentId: e.id,
            assignmentName: e.assignmentName,
          };
          this.rAssignmentList.push(resultAssignmentList);

        });
        // console.log(this.rAssignmentList);
      });
    } catch (error) {
      console.error('GET all assignmentList fail');
    }
  }

  onCancel(): void {
    this.assignmentcardChange.emit('cancel');
  }

  // tslint:disable-next-line: typedef
  keyDownFunction(event, card: string) {
    if (event.keyCode === 13) {
      alert('Edit Success');
      const cardId = card;

      this.actual = {
        actualTime: parseFloat(this.editCard.get('cardActualTime').value),
      };
      console.log('actual :', this.actual);
      console.log('cardId :', cardId);

      this.availabilityService.updateCard(cardId, this.actual)
        .subscribe((r) => {
          console.log(r);
          console.log('***actual time:', this.actual);
        });
    }
  }

  // tslint:disable-next-line: typedef
  updateFunction(card: string) {
    alert('Edit Success');
    const cardId = card;

    this.actual = {
      actualTime: parseFloat(this.editCard.get('cardActualTime').value),
    };
    console.log('actual :', this.actual);
    console.log('cardId :', cardId);

    this.availabilityService.updateCard(cardId, this.actual)
      .subscribe((r) => {
        console.log(r);
        console.log('***actual time:', this.actual);
      });
  }

  // tslint:disable-next-line: typedef
  updateComplete() {
    this.submitCompleted.emit();
  }


  updateDeleteStatus(id: string): void {
    const deleteStatus = true;
    const cardId = id;
    // debugger;
    this.status = {
      deletedStatus: deleteStatus,
    };
    try {
      this.availabilityService.updateDeleteStatusCard(cardId, this.status)
        .subscribe((r) => {
          console.log(r);
        });
      console.log('id', id);
      console.log(' Delete status', this.status);
      alert('Delete success');
      // this.submitUpdateCardCompleted.emit();
      this.submitCompleted.emit();

    } catch (error) {
      alert('Delete fail');
    }

  }

}
