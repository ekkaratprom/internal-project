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
  @Output() assignmentcardChange = new EventEmitter();
  @Output() submitCompleted = new EventEmitter();
  card: CardForm;
  actual: Actual;

  projectList = [];
  assignmentList = [];
  rAssignmentList = [];
  cardsData = [];
  // cardId;



  constructor(private assignmentService: AssignmentService, private router: Router, private availabilityService: AvailabilityService) { }

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

  public editCard = new FormGroup({
    cardActualTime: new FormControl(null, Validators.compose([
      Validators.required,
      Validators.pattern('^[0-9].*$')
    ])),
  });

  ngOnInit(): void {
    this.getAllAssignment();
    console.log('************', this.modalValue);
    console.log('************', this.modalValue[0].cards);
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
        this.router.navigateByUrl('');
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


  keyDownFunction(event, card: string) {
    if (event.keyCode === 13) {

      // console.log(card);     
      alert('you just pressed the enter key');
      // const cardId = this.modalValue[0].cards.card[0].cardId;
      // rest of your code
      const cardId = card;
      debugger;
      this.actual = {
        actualTime: parseFloat(this.editCard.get('cardActualTime').value),
        // tslint:disable-next-line: radix
      };
      console.log('actual :', this.actual);
      console.log('cardId :', cardId);

      this.availabilityService.updateCard(cardId, this.actual)
        .subscribe((r) => {
          console.log(r);
        });
    }
  }

}
