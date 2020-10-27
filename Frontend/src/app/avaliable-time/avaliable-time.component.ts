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
  color = [0, 3, 6, 8, 4, 6, 8, 1, 2, 4, 0, 2, 7, 1, 5, 8, 9, 2, 2, 8, 1, 4, 5, 7, 3, 4, 7, 2, 4, 6];
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
  }

  open(content): void {
    this.modalReference = this.modalService.open(content, { size: 'sm' });
  }

  close(): void {
    this.modalReference.close();
  }
}
