import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  DMY: NgbDateStruct;
  today = this.calendar.getToday();
  title = 'angular-text-search-highlight';


  constructor(private calendar: NgbCalendar) {

  }

  ngOnInit(): void {
  }

}
