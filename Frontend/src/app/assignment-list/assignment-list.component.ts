import { QueueviewserviceService } from './../queueviewservice.service';
import { AssignmentService } from './shared/assignment.service';
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
  assignmentId: number;
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
  kevin = false;
  completeStatus = false;
  assigmentId;
  status;
  completedStatus ;

  public isCollapsed = true;

  constructor(private qv: QueueviewserviceService , private assignmentService: AssignmentService,
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

  updateDeleteStatus(id: string): void {
    const deleteStatus = true;
    const assignmentId = id;
    // debugger;
    this.status = {
        deletedStatus: deleteStatus,
      };
    try {
        this.assignmentService.updateDeleteStatusAssignment(assignmentId, this.status)
        .subscribe((r) => {
          console.log(r);
        });
        console.log('id', id);
        console.log(' delete status', this.status);
        alert('Delete success');

      } catch (error) {
        alert('Delete fail');
      }


  }


  updateStatus(id: string, statusChange: boolean): void {
    this.status = {
      completedStatus: statusChange,
      };
    this.assignmentService.updateCompleteAssignment(id, this.status)
        .subscribe((r) => {
          console.log(r);
        });
    console.log('id=', id);
    console.log('status=' , this.status);


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
          }
        );
    } catch (error) {
      console.error('GET all assignments fail');
    }
  }
  toggle(id: string, status: boolean): void {
    if (status === true){
      this.completedStatus = false;
    }
    if (status === false){
      this.completedStatus = true;

    }
    this.updateStatus(id, this.completedStatus);
    console.log('completedStatus', this.completedStatus);
    alert('Change completed status success');
  }

  test2(){
    console.log('test2');
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
              assignmentId: element.assignmentId,
              assignmentName: element.assignmentName,
              billableTime: element.billableTime,
              completedStatus: element.completedStatus,
              estimateTime: element.estimateTime,
              totalActualTime: element.totalActualTime,
              cardObj: this.cObj,
            };
            this.result.push(cardDetail);
          });
          console.log('result', this.result);
        }
        );
    } catch (error) {
      console.error('GET all cards fail');
    }
  }
}
