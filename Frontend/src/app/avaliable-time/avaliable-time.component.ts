import { AvailabilityService } from './shared/availability.service';
import { MockAvaliabilityService } from './../service/mock-avaliability.service';
import { AssignmentService } from './../assignment-list/shared/assignment.service';
import { AssignmentResponse } from './../assignment-list/shared/assignment-model';
import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


export interface UserDetail {
  userId: number;
  fullName: string;
  position: string;
}

@Component({
  selector: 'app-avaliable-time',
  templateUrl: './avaliable-time.component.html',
  styleUrls: ['./avaliable-time.component.css']
})
export class AvaliableTimeComponent implements OnInit {
  private _date;
  startDate;
  endDate;
  assignments: AssignmentResponse[] = [];
  searchText = '';
  availibleUsers;
  positionCheck = null;
  skillsetCheck = null;
  userDetail: UserDetail;
  result = [];
  skillObj = [];
  cardObj = [];
  cardListObj = [];
  completedStatusCheck = undefined;
  modalReference: NgbModalRef;
  color = [0, 3, 6, 8, 4, 6, 8, 1, 2, 4, 0, 2, 7, 1, 5, 8, 9, 2, 2, 8];
  totalActualTimeList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  totalSave = [];

  skillsets = ['angular', 'bootstrap', 'html5'];
  x = ['nine', 'big', 'p_view', 'p_joy', 'p_jum'];
  dateList = [];

  @Input()
  set date(val: any) {
    if (val.year !== undefined) {
      this._date = new Date(val.year, val.month - 1, val.day, 0, 0, 0, 0);
    } else {
      this._date = new Date();
    }
    this.addDateList();
    this.setTotalActualTime();
  }

  get date(): any {
    if (!this._date) { return new Date(); }
    return this._date;
  }

  constructor(private modalService: NgbModal,
    private assignmentService: AssignmentService,
    private availibilityService: AvailabilityService,
    private mockAvailibility: MockAvaliabilityService,
  ) { }

  ngOnInit(): void {
    this.getAllAssignmentCards();
    this.getAllUsersAvailiable();
    this.setTotalActualTime();
  }

  getAllAssignmentCards(): void {
    try {
      this.assignmentService.getAllAssignments().subscribe(res => {
        this.assignments = res;
      });
    } catch (error) {
      console.error('GET all assignment fail');
    }
  }

  getAllUsersAvailiable(): void {
    try {
      this.availibilityService
        .getUserAvailiability()
        .subscribe((res) => {
          // debugger;

          this.availibleUsers = res;
          // console.log('response', this.availibleUsers);
          this.availibleUsers.forEach(element => {
            this.skillObj = [];

            element.skills.forEach(e => {
              const skills = {
                skillName: e.skillName,
                iconPath: e.iconPath,
              };
              this.skillObj.push(skills);
            });

            this.cardObj = [];
            element.cards.forEach(e => {
              this.cardListObj = [];
              e.card.forEach(element => {
                const card = {
                  cardId: element.cardId,
                  cardName: element.cardName,
                  actualTime: element.actualTime,
                  createDate: element.createDate,
                };
                this.cardListObj.push(card);

              });
              const cards = {
                totalActualTime: e.totalActualTime,
                cardDate: e.cardDate,
                card: this.cardListObj,
              };
              this.cardObj.push(cards);
              console.log('cardDate', cards.cardDate);
              const cod = cards.cardDate;
              console.log('cod', cod);
            });
            this.totalSave = this.cardObj;
            console.log('card', this.cardObj);

            const userDetail = {
              userId: element.userId,
              fullName: element.fullName,
              position: element.position,
              skills: this.skillObj,
              cards: this.cardObj,
            };
            this.result.push(userDetail);
          });

        }, (error) => {
          console.log('Get all Users Availiable error: ', error);
          this.availibleUsers = this.mockAvailibility.getUserAvailiability();

          this.availibleUsers.forEach(element => {
            const userDetail = {
              userId: element.userId,
              fullName: element.fullName,
              position: element.position,
            };
            this.result.push(userDetail);
          });
        });
    } catch (error) {
      console.error('GET All Users Availiable fail');
    }
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

  setTotalActualTime(): void {
    console.log('fun 1', this.totalSave.length);

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.totalSave.length; i++) {
      this.totalActualTimeList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      const actual = this.totalSave[i].totalActualTime;
      const date = this.totalSave[i].cardDate;
      const toDate = new Date(date);
      console.log('Date fun 1: ', date);
      console.log('toDate fun 1: ', toDate);
      // toDate.setMonth(toDate.getMonth() - 1);
      const rd = this.setDayWOSunSat(toDate);
      if (rd == null) {
        continue;
      }
      this.totalActualTimeList[rd] = actual;
      console.log('result :', actual, date, toDate, rd);
      console.log('totalActualTimeList :', this.totalActualTimeList);
    }

  }

  setDayWOSunSat(date): number {
    let i = 0;
    const sd = this.startDate;
    let d = date;
    console.log('setDayWOSunSat');
    console.log('if', date > this.startDate, date < this.endDate);
    console.log('Date', date);
    console.log('Startdate', this.startDate);
    if (d > this.startDate && d < this.endDate) {
      console.log('m', d, sd)
      while (d.getDate() != sd.getDate()) {
        if (d.getDay() !== 0 && d.getDay() !== 6) {
          i++;
        }
        d.setDate(d.getDate() + 1);
        // console.log('while', i);
        // console.log('date', date);
        // console.log('sd', sd);
      }
      console.log('b', d.getDate() != sd.getDate(), d.getDate(), sd.getDate())
      console.log('d', d);
      return i;

    }
    return null;

  }


  open(content): void {
    this.modalReference = this.modalService.open(content, { size: 'sm' });
  }

  close(): void {
    this.modalReference.close();
  }
}
