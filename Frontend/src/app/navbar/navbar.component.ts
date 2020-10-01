// import { Component, OnInit } from '@angular/core';
// import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
// export class NavbarComponent implements OnInit {

// DMY = this.calendar.getToday();


// monthlist = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
//   "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

// month = '';
// weekdays = [0, 0, 0, 0, 0, 0, 0];
// today = this.calendar.getToday();
// date = 8;

// title = 'angular-text-search-highlight';

// constructor(private calendar: NgbCalendar) {
//   this.changeMonth()
//   this.changeday()
//   this.weekdayfn()
// }
// public changeMonth() {
//   this.month = this.monthlist[this.DMY.month - 1];
// }
// public changeday() {
//   this.date = this.calendar.getWeekday(this.DMY);
// }
// public weekdayfn() {
//   this.weekdays.splice(this.date, 1, this.DMY.day)
//   for (let i = 0; i < 7; i++) {
//     if (i < this.date) {
//       let diff = this.date - i
//       let previousday = this.calendar.getPrev(this.DMY, "d", diff)
//       this.weekdays[i] = previousday.day
//     }
//     if (i > this.date) {
//       let diff = i - this.date
//       let previousday = this.calendar.getNext(this.DMY, "d", diff)
//       this.weekdays[i] = previousday.day
//     }
//   }

// }
// ngOnInit(): void {
// }
// }
