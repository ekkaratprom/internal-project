import { DYNAMIC_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  DMY = this.calendar.getToday();
  monthlist = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  month = '';
  today = this.calendar.getToday();
  title = 'angular-text-search-highlight';

  constructor(private calendar: NgbCalendar) {
    this.changeMonth()
  }
  changeMonth() {
    this.month = this.monthlist[this.DMY.month - 1];
  }
  ngOnInit(): void {

  }

}
