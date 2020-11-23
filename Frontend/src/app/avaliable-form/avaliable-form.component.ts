import { NgbCalendar, NgbDate, NgbDateParserFormatter, NgbDateStruct, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AvailabilityService } from './../avaliable-time/shared/availability.service';
import { Total } from './../avaliable-time/shared/availiability-model';
import { AssignmentService } from './../assignment-list/shared/assignment.service';
import { Assignment, CardForm, CardList } from './../assignment-list/shared/assignment-model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

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
  total: Total;
  modalReference: NgbModalRef;
  projectList = [];
  assignmentList = [];
  rAssignmentList = [];
  cardsData = [];
  status;
  pickerDisplayDay = true;
  dayPick: NgbDateStruct;
  today = this.calendar.getToday();
  selectDate;
  diffTimeDay;
  businessDays;

  // cardId;""

  //period date
  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate;
  toDate: NgbDate | null = null;
  sd;
  ed;

  constructor(private ngbmodal: NgbModal, private assignmentService: AssignmentService,
    private router: Router, private availabilityService: AvailabilityService,
    private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  public addCard = new FormGroup({
    assignmentId: new FormControl(null, Validators.compose([
      Validators.required,
    ])),
    estimateTime: new FormControl(null, Validators.compose([
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
      Validators.pattern('^[1-9].*$'),
      Validators.max(24),
      Validators.min(1)
    ])),
    cardEstimateTime: new FormControl(null, Validators.compose([
      Validators.pattern('^[1-9].*$'),
      Validators.max(24),
      Validators.min(1)
    ])),
  });

  ngOnInit(): void {
    this.getAllAssignment();
    // console.log('**********', this.modalValue);
    // console.log('**********', this.modalValue[0].cards);
    this.cardsData = [this.modalValue[0].cards];
    this.selectDate = this.modalValue[0].cards.cardDate;
  }

  onSubmit(): void {
    // const dateFormat = new Date('2020-10-30T03:48:49.759Z').toLocaleString('en-GB').substring(0, 10).split('/').join('-');
    let date: any;

    // tslint:disable-next-line: triple-equals
    if (this.dayPick == undefined) {
      date = this.selectDate;
    } else {
      date = `${this.dayPick.year}-${this.dayPick.month}-${this.dayPick.day}`;
    }
    this.card = {
      userId: this.modalValue[1].userId,
      // cardDate: this.modalValue[0].cards.cardDate,
      cardDate: date,
      cardName: this.addCard.get('cardName').value,
      estimateTime: parseFloat(this.addCard.get('estimateTime').value),
      // tslint:disable-next-line: radix
      assignmentId: parseInt(this.addCard.get('assignmentId').value),
    };

    const resObj = Array();
    resObj.push(this.card);
    console.log('resObj', resObj);


    this.assignmentService.addCard(resObj)
      .subscribe((r) => {
        console.log(r);
        // this.router.navigateByUrl('/available-form');
        this.submitCompleted.emit();
      });

  }

  onSubmitPeriod(): void {
    // const dateFormat = new Date('2020-10-30T03:48:49.759Z').toLocaleString('en-GB').substring(0, 10).split('/').join('-');
    // const startDate = ${this.fromDate.year}-${this.fromDate.month}-${this.fromDate.day};
    // const endDate = ${this.toDate.year}-${this.toDate.month}-${this.toDate.day};
    // const sd = new Date(startDate);
    // const ed = new Date(endDate);

    const resObj = [];
    const day = this.sd;
    let i = 0;
    // const diffTime = this.ed.getTime() - this.sd.getTime();
    // const diffTimeDay = diffTime / (1000 * 3600 * 24);
    console.log('businessDays', this.businessDays);

    while (i <= this.businessDays) {

      if (day.getDay() !== 0 && day.getDay() !== 6) {

        const date = new Date(day);
        this.card = {
          userId: this.modalValue[1].userId,
          // cardDate: this.modalValue[0].cards.cardDate,
          cardDate: date.toLocaleString('en-GB').substring(0, 10).split('/').join('-'),
          cardName: this.addCard.get('cardName').value,
          estimateTime: parseFloat(this.addCard.get('estimateTime').value),
          // tslint:disable-next-line: radix
          assignmentId: parseInt(this.addCard.get('assignmentId').value),
        };
        resObj.push(this.card);
        day.setDate(day.getDate() + 1);
        i++;
        console.log('resObj', resObj);
      }


    }

    this.assignmentService.addCard(resObj)
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

  calenderPicker(day: Boolean): void {
    if (day === true) {
      // tslint:disable-next-line: no-unused-expression
      this.pickerDisplayDay = true;
    }
    if (day === false) {
      // tslint:disable-next-line: no-unused-expression
      this.pickerDisplayDay = false;
    }

  }

  // tslint:disable-next-line: typedef
  keyDownFunction(event, card: string) {
    if (event.keyCode === 13) {
      alert('Edit Success');
      const cardId = card;

      this.total = {
        actualTime: parseFloat(this.editCard.get('cardActualTime').value),
        estimateTime: parseFloat(this.editCard.get('cardEstimateTime').value),
      };
      console.log('Total :', this.total);
      console.log('cardId :', cardId);

      this.availabilityService.updateCard(cardId, this.total)
        .subscribe((r) => {
          console.log(r);
          console.log('***Total time:', this.total);
        });
    }
  }

  // tslint:disable-next-line: typedef
  updateFunction(card: string) {
    alert('Edit Success');
    const cardId = card;

    this.total = {
      actualTime: parseFloat(this.editCard.get('cardActualTime').value),
      estimateTime: parseFloat(this.editCard.get('cardEstimateTime').value),
    };
    console.log('Total time :', this.total);
    console.log('cardId :', cardId);

    this.availabilityService.updateCard(cardId, this.total)
      .subscribe((r) => {
        console.log(r);
        console.log('***Total time:', this.total);
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

  calcWorkingDays(startDate, endDate) {
    let day = moment(startDate);
    this.businessDays = 0;

    while (day.isSameOrBefore(endDate, 'day')) {
      if (day.day() !== 0 && day.day() !== 6) { this.businessDays++; }
      day.add(1, 'd');
    }
    return this.businessDays;


  }

  // period date
  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
    console.log('fromDate', this.fromDate);
    console.log('toDate', this.toDate);

    const startDate = `${this.fromDate.year}-${this.fromDate.month}-${this.fromDate.day}`;
    const endDate = `${this.toDate.year}-${this.toDate.month}-${this.toDate.day}`;

    this.sd = new Date(startDate);
    this.ed = new Date(endDate);

    this.calcWorkingDays(this.sd, this.ed);

    // const diffTime = this.ed.getDate() - this.sd.getDate();
    // this.diffTimeDay = diffTime / (1000 * 3600 * 24);

    console.log('startDate', this.sd);
    console.log('endDate', this.ed);
    // console.log('range', (this.ed - this.sd));
    // console.log('hover', (this.hoveredDate));
    // console.log('ed', (this.ed.setDate(this.ed.getDate())));
    // console.log('sd', (this.sd.setDate(this.sd.getDate())));
    // console.log('diffTime', diffTime);
    // console.log('diffTimeDay', this.diffTimeDay);

  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }



}
