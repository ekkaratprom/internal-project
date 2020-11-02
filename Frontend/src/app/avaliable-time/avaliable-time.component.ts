import { AvailabilityService } from './shared/availability.service';
import { MockAvaliabilityService } from './../service/mock-avaliability.service';
import { AssignmentResponse } from './../assignment-list/shared/assignment-model';
import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-avaliable-time',
  templateUrl: './avaliable-time.component.html',
  styleUrls: ['./avaliable-time.component.css']
})

export class AvaliableTimeComponent implements OnInit {
  private _date;
  startDate;
  endDate;
  searchText = '';
  positionCheck = null;
  skillsetCheck = null;
  completedStatusCheck = undefined;
  modalReference: NgbModalRef;
  color = [0, 3, 6, 8, 4, 6, 8, 1, 2, 4, 0, 2, 7, 1, 5, 8, 9, 2, 2, 8];
  users;
  cards;
  avaliableLists = [];
  dateList = [];
  data;
  data2;

  // @Input() avaliable: Observable<any>;

  @Input()
  set date(val: any) {
    if (val.year !== undefined) {
      this._date = new Date(val.year, val.month - 1, val.day, 0, 0, 0, 0);
    } else {
      this._date = new Date();
    }
    this.addDateList();
    this.avaliableLists = [];
    this.avaliableList();
  }

  get date(): any {
    if (!this._date) { return new Date(); }
    return this._date;
  }

  constructor(private modalService: NgbModal,
    private availibilityService: AvailabilityService,
    private mockAvailibility: MockAvaliabilityService,
  ) { }

  ngOnInit(): void {
    // this.avaliable = Observable
    //   .interval(1000)
    //   .startWith(0).switchMap(() => this.availibilityService.getUserAvailiability());
  }

  addDateList(): void {
    const p = this.date;
    p.setDate(p.getDate() - 1);
    let i = 0;
    this.dateList = [];
    while (i < 20) {
      p.setDate(p.getDate() + 1);
      const d = new Date(p);
      if (d.getDay() !== 0 && d.getDay() !== 6) {
        this.dateList.push(d);
        i++;
      }
    }
    this.startDate = this.dateList[0];
    this.endDate = this.dateList[19];
    console.log('start', this.startDate);
    console.log('end', this.endDate);
  }

  avaliableList(): void {
    console.log('this.dateList', this.dateList);
    this.avaliableLists = [];
    this.availibilityService
      .getUserAvailiability()
      .subscribe((res) => {
        this.users = res;
        this.users.map(user => {
          const userList = JSON.parse(JSON.stringify(user));
          userList.cards = [];
          this.dateList.map(date => {
            const cardTemp = {
              'totalActualTime': 0,
              'cardDate': date,
              'card': []
            };
            let status;
            const dateFormat = new Date(date).toLocaleString('en-GB').substring(0, 10).split('/').join('');
            user.cards.map(card => {
              const dateCard = new Date(card.cardDate).toLocaleString('en-GB').substring(0, 10).split('/').join('');
              if (dateCard === dateFormat) {
                status = true;
                userList.cards = [...userList.cards, card];
              }
            });
            if (!status) { userList.cards = [...userList.cards, cardTemp]; }
          });
          this.avaliableLists = [...this.avaliableLists, userList];
        });
        console.log('***avaliableList', this.avaliableLists);
      });
  }

  open(content, result): void {
    // debugger;
    this.data = result;
    // this.data2 = result2;
    this.modalReference = this.modalService.open(content, { size: 'sm' });
  }

  close(): void {
    this.modalReference.close();
  }
}