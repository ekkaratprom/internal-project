import { QueueviewserviceService } from './../queueviewservice.service';
import { element } from 'protractor';
import { AssignmentService } from './shared/assignment.service';
import { MockCardsService } from './../service/mock-cards.service';
import { MockAssignmentService } from './../service/mock-assignment.service';
import { Assignment, AssignmentResponse, CardList, CardObj } from './shared/assignment-model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

export interface CardData {
  cardName: string;
  cardActualTime: number;
  cardDate: string;
}

export interface CardDetail {
  assignmentName: string;
  billableTime: number;
  completedStatus: boolean;
  estimateTime: number;
  totalActualTime: number;
}


@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.css']
})
export class AssignmentListComponent implements OnInit {
  assignmentsearchText = '';
  completedStatusCheck = undefined;
  assignments: AssignmentResponse[] = [];
  cardLists: CardList;
  results: CardData[] = [];
  cards;
  cardDetail;
  toggle1 = false;
  toggle2 = false;
  result = [];
  cObj = [];
  modalReference: NgbModalRef;
  kevin =false;

  public isCollapsed = true;

  constructor(private qv:QueueviewserviceService , private assignmentService: AssignmentService,
    private mockAssignments: MockAssignmentService,
    private mockCards: MockCardsService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    // this.getAllAssignmentCards();
    this.getAllCards();
  }

  open(content): void {
    this.modalReference = this.modalService.open(content, { size: 'sm' });
  }

  close(): void {
    this.modalReference.close();
  }

  getAllAssignmentCards(): void {
    try {
      this.assignmentService
        .getAllAssignments()
        .subscribe(res => {
          this.assignments = res;
          // console.log(this.assignments);
        }
          ,
          (error) => {
            console.log('Get Assignment error: ', error);
            this.assignments = this.mockAssignments.getAllAssignments();
          }
        );
    } catch (error) {
      console.error('GET all assignments fail');
    }
  }
  toggle(): void {
    if (this.completedStatusCheck === true){
      this.completedStatusCheck = false;
    }
    if (this.completedStatusCheck === false){
      this.completedStatusCheck = true;
    }
    console.log(this.completedStatusCheck);
  }

  test2(){
    console.log("test2");
    this.qv.settest(this.kevin);
    this.kevin = !this.kevin;
  }

  getAllCards(): void {
    try {
      this.assignmentService
        .getAllCards()
        .subscribe((res) => {
          this.cards = res;

          // console.log('cards', this.cards);


          this.cards.forEach(element => {
            // clear
            this.cObj = [];
            element.cardObj.forEach(c => {
              const cardObj = {
                cardName: c.cardName,
                cardActualTime: c.cardActualTime,
                cardDate: c.cardDate
              };
              this.cObj.push(cardObj);
            });
            const cardDetail = {
              assignmentName: element.assignmentName,
              billableTime: element.billableTime,
              completedStatus: element.completedStatus,
              estimateTime: element.estimateTime,
              totalActualTime: element.totalActualTime,
              cardObj: this.cObj,
            };
            this.result.push(cardDetail);
          });
          // console.log('result', this.result);
        }, (error) => {
          console.log('Get cards error: ', error);
          this.cards = this.mockCards.getAllCards();
          this.cards.forEach(element => {
            // clear
            this.cObj = [];
            element.cardObj.forEach(el => {
              const cardObj = {
                cardName: el.cardName,
                cardActualTime: el.cardActualTime,
                cardDate: el.cardDate
              };
              this.cObj.push(cardObj);
            });
            const cardDetail = {
              assignmentName: element.assignmentName,
              billableTime: element.billableTime,
              completedStatus: element.completedStatus,
              estimateTime: element.estimateTime,
              totalActualTime: element.totalActualTime,
              cardObj: this.cObj,
            };
            this.result.push(cardDetail);
          });
          // console.log('result', this.result);
        }
        );
    } catch (error) {
      console.error('GET all cards fail');
    }
  }
}
