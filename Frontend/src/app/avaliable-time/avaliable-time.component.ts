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
          this.availibleUsers = res;
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
            });
            this.totalSave = this.cardObj;
            // console.log('card', this.cardObj);

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

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.totalSave.length; i++) {
      let a = this.totalSave[i].totalActualTime;
      let b = this.totalSave[i].cardDate;
      let c = new Date(b);
      let d = this.setDayWOSunSat(c);
      this.totalActualTimeList[d] = a;
      console.log('result', a, b, c, d);
      console.log('totals p', this.totalActualTimeList);
    }

  }

  setDayWOSunSat(date): number {
    let i = 0;
    let sd = this.startDate;
    if (date < this.startDate) {

      while (date.getDate() != sd.getDate()) {
        if (date.getDay() !== 0 && date.getDay() !== 6) {
          i++;
        }
        date.setDate(date.getDate() + 1);
        // console.log('while naja <', i);
        // console.log('date', date);
        // console.log('sd', sd);
      }
      return i;
    } else {
      while (date.getDate() != sd.getDate()) {
        if (sd.getDay() !== 0 && sd.getDay() !== 6) {
          i++;
        }
        sd.setDate(sd.getDate() + 1);
        // console.log('while naja >', i);
        // console.log('date', date);
        // console.log('sd', sd);

      }
      return i;
    }
  }


  open(content): void {
    this.modalReference = this.modalService.open(content, { size: 'sm' });
  }

  close(): void {
    this.modalReference.close();
  }
}
