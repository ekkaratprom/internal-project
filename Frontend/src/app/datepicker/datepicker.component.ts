import { OnChanges } from '@angular/core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModalConfig, NgbModal, NgbModalRef, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit , OnChanges{
  modalReference: NgbModalRef;
  monthlist = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
    'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
  month = '';
  date = 8;
  weekdays = [0, 0, 0, 0, 0, 0, 0];
  DMY = this.calendar.getToday();
  @Output() weekChange = new EventEmitter();
  @Output() dateChange = new EventEmitter();

  @Input() datep: any;

  constructor(private calendar: NgbCalendar, config: NgbModalConfig, private modalService: NgbModal) {
    this.changeMonth();
    this.changeday();
    this.weekdayfn1();

  }

  ngOnInit(): void {
    // console.log('datep',this.datep);
  }

  ngOnChanges(changes) {
    // changes.prop contains the old and the new value...
    // console.log(changes)
    if (this.datep){
    this.month = this.monthlist[this.datep.getMonth()];
    console.log(this.datep);
    console.log(this.month);
    console.log(this.datep.getMonth());
    }

  }
  public changeMonth() {
    this.month = this.monthlist[this.DMY.month - 1];
  }

  public changeday() {
    this.date = this.calendar.getWeekday(this.DMY);

  }
  public weekdayfn1() {
    this.weekdays.splice(this.date, 1, this.DMY.day);
    this.weekChange.emit(this.weekdays);
    this.dateChange.emit(this.DMY);

    // console.log('child', this.weekdays)
    // console.log('date', this.DMY)
    // this.fullweekdays.splice(this.date, 1, `${this.DMY.year}-${this.DMY.month}-${this.DMY.day}`);
    for (let i = 0; i < 7; i++) {
      if (i < this.date) {
        let diff = this.date - i
        let previousday = this.calendar.getPrev(this.DMY, 'd', diff);
        this.weekdays[i] = previousday.day;
      }
      if (i > this.date) {
        let diff = i - this.date;
        let nextday = this.calendar.getNext(this.DMY, 'd', diff);
        this.weekdays[i] = nextday.day
        // r = nextday.year.toString() + nextday.month.toString();
        // console.log(r);
      }
    }
  }

  datePickerChange(): void {
    this.changeMonth(); this.changeday(); this.weekdayfn1();
    this.weekChange.emit(this.weekdays);
  }
}

