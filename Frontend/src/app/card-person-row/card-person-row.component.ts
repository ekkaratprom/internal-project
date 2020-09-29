import { CardResponse } from './../card/shared/card.model';
import { CardService } from './../card/shared/card.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModalConfig, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card-person-row',
  templateUrl: './card-person-row.component.html',
  styleUrls: ['./card-person-row.component.css']
})
export class CardPersonRowComponent implements OnInit {
  modalReference: NgbModalRef;
  cards: CardResponse[] = [];
  x: any;

  weekDays = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    0: 'Sunday'
  }

  constructor(private cardService: CardService, config: NgbModalConfig, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.cardService.getAllForm().subscribe(res => {
      this.cards = res;
      this.toWeeks();
      // console.log(this.cards)
      // this.cards.forEach((y) => {
      //   let q = new Date(Date.parse(y.taskDate));
      //   let z = q.getDay();
      //   console.log(this.weekdayfn(z));
      // })


      //   this.cards.push({
      //     name: this.cards.assignee,
      //     id: 1,
      //     projectId: this.cardResponse.projectId,
      //     projectName: this.cardResponse.projectName,
      //     taskName: this.cardResponse.taskName,
      //     estimateTime: this.cardResponse.estimateTime,
      //     actualTime: this.cardResponse.actualTime,
      //     referenceLink: this.cardResponse.referenceLink,
      //     taskDate: this.cardResponse.taskDate,
      //     completedStatus: this.cardResponse.completedStatus,
      //     billableTime: this.cardResponse.billableTime
      //   },
      //   );
    });

  }

  open(content): void {
    this.modalReference = this.modalService.open(content, { size: 'sm' });
  }

  onCardChange(e): void {
    console.log(e);
    this.modalReference.close();
  }

  weekdayfn(i: number): void {
    return this.weekDays[i];
  }

  toWeeks(): void {
    console.log('something')
    const objToReturn = {}
    this.cards.forEach((task) => {
      // If assignee is empty create an object
      if (!objToReturn[task.assignee]) {
        objToReturn[task.assignee] = objToReturn[task.assignee] = {};
      }
      // Date parsing input date string; get dayInweek in number; start on Sunday
      const taskDate = task.taskDate;
      const taskDateParsed = Date.parse(taskDate)
      const taskDateObject = new Date(taskDateParsed);
      const taskDateDayInWeek = taskDateObject.getDay();

      if (!objToReturn[task.assignee][this.weekdayfn(taskDateDayInWeek)]) {
        // if object is undefined, create an array with task in it
        objToReturn[task.assignee][this.weekdayfn(taskDateDayInWeek)] = [task];
      } else {
        // else push task into exisiting array  
        objToReturn[task.assignee][this.weekdayfn(taskDateDayInWeek)].push(task);
      }
    })
    console.log(objToReturn);
    this.x = objToReturn;

  }





}
