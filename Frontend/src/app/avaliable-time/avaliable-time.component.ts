import { Position } from './shared/availiability-model';
import { QueueviewserviceService } from './../queueviewservice.service';
import { AvailabilityService } from './shared/availability.service';
import { MockAvaliabilityService } from './../service/mock-avaliability.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  test3;
  searchText = '';
  positionCheck = undefined;
  skillsetCheck = undefined;
  completedStatusCheck = undefined;
  modalReference: NgbModalRef;
  users;
  cards;
  avaliableLists = [];
  dateList = [];
  position = [];
  skill = [];
  data;
  data2;
  dateSent;
  indexSelected: number;
  itemSelected: number;
  isLoading = true;

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
  @Output() dateOnNextBack = new EventEmitter();


  // tslint:disable-next-line: adjacent-overload-signatures
  get date(): any {
    if (!this._date) { return new Date(); }
    return this._date;
  }

  constructor(private modalService: NgbModal,
    private qv: QueueviewserviceService,
    private availibilityService: AvailabilityService,
    private mockAvailibility: MockAvaliabilityService,
  ) { }

  ngOnInit(): void {
    this.qv.getTest().subscribe((val) => {
      console.log(val);
    });
    this.getAllPosition();
    this.getAllSkill();
  }
  nextweek(): void {
    const p = this.dateList[0];
    p.setDate(p.getDate() + 6);
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
    this.dateOnNextBack.emit(this.startDate);
    this.avaliableList();
  }

  previousweek(): void {
    const p = this.dateList[0];
    p.setDate(p.getDate() - 8);
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
    this.dateOnNextBack.emit(this.startDate);
    this.avaliableList();
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
    this.isLoading = true;
    this.avaliableLists = [];
    this.availibilityService
      .getUserAvailiability()
      .subscribe((res) => {
        this.isLoading = false;
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

    this.data = result;
    // this.data2 = result2;
    this.modalReference = this.modalService.open(content, { size: 'sm' });
  }

  close(): void {
    this.modalReference.close();
    this.avaliableList();
  }

  // tslint:disable-next-line: typedef
  updateItem(newItem: any) {
    this.avaliableLists[this.indexSelected] = newItem;
  }

  getAllPosition(): void {
    try {
      this.availibilityService.getAllPosition().subscribe((res) => {
        this.position = res;
      });
    } catch (error) {
      console.error('GET all position fail');
    }
  }

  getAllSkill(): void {
    try {
      this.availibilityService.getAllSkill().subscribe((res) => {
        this.skill = res;
      });
    } catch (error) {
      console.error('GET all position fail');
    }
  }

}
