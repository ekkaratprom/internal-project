import { map } from 'rxjs/operators';
import { NgbCalendar, NgbDate, NgbDateParserFormatter, NgbDateStruct, NgbModal, NgbModalRef, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
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

  constructor(private ngbmodal: NgbModal, private assignmentService: AssignmentService,
    private router: Router, private availabilityService: AvailabilityService, private modalService: NgbModal,
    private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) {

    this.markDisabled = (date: NgbDate) => calendar.getWeekday(date) >= 6;

  }
  @Input() modalValue: any;
  @Output() itemCardChange = new EventEmitter<number>();
  @Output() assignmentcardChange = new EventEmitter();
  @Output() submitCompleted = new EventEmitter();
  @Output() submitUpdateCardCompleted = new EventEmitter();
  card: CardForm;
  total: Total;
  modalReference: NgbModalRef;
  projectList = [];
  closeResult = '';
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
  resultAvaliable;
  totalEstimateValue;
  estimateStatus = false;
  cardEstimateStatus = false;
  cardId;
  cardActualId;
  markDisabled;


  //period date
  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate;
  toDate: NgbDate | null = null;
  sd;
  ed;
  day;
  fromDay;

  y;
  m;
  d;

  daySent;

  public addCard = new FormGroup({
    assignmentId: new FormControl(null, Validators.compose([
      Validators.required,
    ])),
    estimateTime: new FormControl(null, Validators.compose([
      Validators.required,
      Validators.pattern('^[1-9].*$'),
      Validators.max(8),
      Validators.min(1),
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
      Validators.max(8),
      Validators.min(1)
    ])),
  });


  // fromModel(date: Date): NgbDate {
  //   return date ? {
  //     year: date.getFullYear(),
  //     month: date.getMonth() + 1,
  //     day: date.getDate()
  //   } : null;
  // }

  ngOnInit(): void {
    this.getAllAssignment();
    // console.log('**********', this.modalValue);
    // console.log('**********', this.modalValue[0].cards);
    this.cardsData = [this.modalValue[0].cards];
    this.selectDate = this.modalValue[0].cards.cardDate;
    this.resultAvaliable = this.modalValue[0].cards;

    console.log('resultAvaliable', this.resultAvaliable.totalEstimateTime);

    this.fromDay = new Date(this.selectDate);
    // this.day = this.fromModel(date);

    // console.log('date ', this.fromDay);
    this.y = this.fromDay.getFullYear();
    // console.log('year ', this.y);
    this.m = this.fromDay.getMonth() + 1;
    // console.log('month ', this.m);
    this.d = this.fromDay.getDate();
    // console.log('day', this.d);

    console.log('selectDate', this.selectDate)


    // console.log('this.fromModel(this.selectDate)', this.fromDay);

    this.fromDate = new NgbDate(this.y, this.m, this.d);
    // console.log('this.fromDate ', this.fromDate);
    this.toDate = this.calendar.getNext(this.fromDate, 'd', 10);
    this.onDateUnselect();


  }

  onSubmit(): void {
    // const dateFormat = new Date('2020-10-30T03:48:49.759Z').toLocaleString('en-GB').substring(0, 10).split('/').join('-');

    if (this.pickerDisplayDay === true) {
      let daySent;
      if (this.dayPick === undefined) {
        daySent = this.selectDate;
        console.log('this.selectDate onSubmit', this.selectDate);

      } else {
        const date = `${this.dayPick.year}-${this.dayPick.month}-${this.dayPick.day}`;
        const day = new Date(date);
        const fixDate = day.setDate(day.getDate() + 1);
        const fixDay = new Date(fixDate);
        if (this.dayPick.day < 10) {
          if (this.dayPick.month < 10) {
            daySent = fixDay.toISOString().substr(0, 10);
          }
          else if (this.dayPick.month >= 10) {
            const dayOverMonth = new Date(date);
            const fixDateOverMonth = dayOverMonth.setDate(dayOverMonth.getDate() + 1);
            const fixDayOverMonth = new Date(fixDateOverMonth);
            daySent = fixDayOverMonth.toISOString().substr(0, 10);
          }
        } else {
          if (this.dayPick.month < 10) {
            const dayOverMonth = new Date(date);
            const fixDateOverMonth = dayOverMonth.setDate(dayOverMonth.getDate() + 1);
            const fixDayOverMonth = new Date(fixDateOverMonth);
            daySent = fixDayOverMonth.toISOString().substr(0, 10);
          }
          else if (this.dayPick.month >= 10) {
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
      }

      this.card = {
        userId: this.modalValue[1].userId,
        // cardDate: this.modalValue[0].cards.cardDate,
        cardDate: daySent,
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

    } else { this.onSubmitPeriod(); }

  }

  onSubmitPeriod(): void {
    // const dateFormat = new Date('2020-10-30T03:48:49.759Z').toLocaleString('en-GB').substring(0, 10).split('/').join('-');
    // const startDate = ${this.fromDate.year}-${this.fromDate.month}-${this.fromDate.day};
    // const endDate = ${this.toDate.year}-${this.toDate.month}-${this.toDate.day};
    // const sd = new Date(startDate);
    // const ed = new Date(endDate);
    // debugger;
    const resObjArray = Array();
    const day = this.daySent;
    let i = 1;


    // const diffTime = this.ed.getTime() - this.sd.getTime();
    // const diffTimeDay = diffTime / (1000 * 3600 * 24);

    while (i <= (this.businessDays)) {

      if (day.getDay() !== 0 && day.getDay() !== 6) {

        const date = new Date(day);
        this.card = {
          userId: this.modalValue[1].userId,
          // cardDate: this.modalValue[0].cards.cardDate,
          cardDate: date.toISOString().substr(0, 10),
          cardName: this.addCard.get('cardName').value,
          estimateTime: parseFloat(this.addCard.get('estimateTime').value),
          // tslint:disable-next-line: radix
          assignmentId: parseInt(this.addCard.get('assignmentId').value),
        };
        resObjArray.push(this.card);
        day.setDate(day.getDate() + 1);
        i++;
      }
      else {
        day.setDate(day.getDate() + 1);
      }
    }

    this.assignmentService.addCard(resObjArray)
      .subscribe((r) => {
        console.log(r);
        console.log('resObjArray', resObjArray);
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

  openclosemodal(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onCancel(): void {
    this.assignmentcardChange.emit('cancel');
  }

  calenderPicker(day: boolean): void {
    console.log('day before do the method', day);
    if (day === true) {
      // tslint:disable-next-line: no-unused-expression
      this.pickerDisplayDay = true;
    }
    if (day === false) {
      // tslint:disable-next-line: no-unused-expression
      this.pickerDisplayDay = false;
    }
    console.log('pickerDisplay', this.pickerDisplayDay);

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

  formStatusDisable(): boolean {
    if (this.resultAvaliable.totalEstimateTime === 8) {
      return true;
    } else { return false; }
  }

  onDateUnselect(): void {
    const startDate = `${this.fromDate.year}-${this.fromDate.month}-${this.fromDate.day}`;
    const endDate = `${this.toDate.year}-${this.toDate.month}-${this.toDate.day}`;

    const day = new Date(startDate);
    const fixDate = day.setDate(day.getDate() + 1);
    const fixDay = new Date(fixDate);
    // tslint:disable-next-line: no-unused-expression
    this.daySent;
    if (this.fromDate.day < 10) {
      this.daySent = new Date(fixDay.toISOString().substr(0, 10));
    } else {
      this.daySent = new Date(startDate);
    }

    this.sd = new Date(startDate);
    this.ed = new Date(endDate);

    this.calcWorkingDays(this.sd, this.ed);

    console.log('startDate', this.sd);
    console.log('endDate', this.ed);
    console.log('businessDays', this.businessDays);

  }

  estimateValidate(event) {

    const limit = (8 - this.resultAvaliable.totalEstimateTime);
    console.log('limit', limit);
    console.log('event', event.key);
    if (event.target.value > limit) {
      console.log('true');
      return this.estimateStatus = true;
    } else { console.log('false'); return this.estimateStatus = false; }
  }

  cardActualValidate(event, id) {
    this.cardActualId = id;
  }

  cardEstimateValidate(event, estimateTime, id) {
    this.cardId = id;
    const limit = (8 - (this.resultAvaliable.totalEstimateTime - estimateTime));
    console.log('limit', limit);
    console.log('event', event.key);
    if (event.target.value > limit) {
      console.log('true');
      return this.cardEstimateStatus = true;
    } else { console.log('false'); return this.cardEstimateStatus = false; }
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
    console.log('businessDays', this.businessDays);

    const day = new Date(startDate);
    const fixDate = day.setDate(day.getDate() + 1);
    const fixDay = new Date(fixDate);
    // tslint:disable-next-line: no-unused-expression
    this.daySent;
    if (this.fromDate.day < 10) {
      this.daySent = new Date(fixDay.toISOString().substr(0, 10));
    } else {
      this.daySent = new Date(startDate);
    }

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
