import { MockCardsService } from './../service/mock-cards.service';
import { MockAssignmentService } from './../service/mock-assignment.service';
import { AssignmentService } from './shared/assignment.service';
import { Assignment, AssignmentResponse, CardList, CardObj } from './shared/assignment-model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
  searchText = '';
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

  public isCollapsed = true;
  constructor(private assignmentService: AssignmentService,
    private mockAssignments: MockAssignmentService,
    private mockCards: MockCardsService) { }

  ngOnInit(): void {
    // this.getAllAssignmentCards();
    this.getAllCards();
  }

  getAllAssignmentCards(): void {
    try {
      this.assignmentService
        .getAllAssignments()
        .subscribe(res => {
          this.assignments = res;
          console.log(this.assignments);
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

  getAllCards(): void {
    try {
      this.assignmentService
        .getAllCards()
        .subscribe((res) => {
          this.cards = res;

          console.log('cards', this.cards);


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
            }
            this.result.push(cardDetail);
          });
          console.log('result', this.result);
        });
    } catch (error) {
      console.error('GET all cards fail');
    }
  }

  //   getAllCards(): void {
  //     try {
  //       this.assignmentService
  //         .getAllCards()
  //         .subscribe((res) => {
  //           this.cards = res;
  //           console.log('cards', this.cards);
  //           // this.cards.forEach(e => {
  //           //   const cardDetail: CardDetail = {
  //           //     assignmentName: ,
  //           //     billableTime: ,
  //           //     completedStatus: ,
  //           //     estimateTime:,
  //           //     totalActualTime: ,
  //           //   }

  //         });

  //       //   this.cards.forEach(card => {
  //       //     // console.log('card', card);
  //       //     // this.cardLists = this.cards;
  //       //     // console.log('cardList', this.cardLists);


  //       //     card.cardObj.forEach(c => {
  //       //       const cardData: CardData = {
  //       //         cardName: c.cardName,
  //       //         cardActualTime: c.cardActualTime,
  //       //         cardDate: c.cardDate,

  //       //       };
  //       //       this.results.push(cardData);
  //       //     });
  //       //   });
  //       //   console.log('results', this.results);
  //       // },
  //       // (error) => {
  //       //   console.log('Get cards error: ', error);
  //       //   this.cards = this.mockCards.getAllCards();
  //       //   this.cards.forEach(card => {
  //       //     console.log('card', card);
  //       //     card.cardObj.forEach(c => {
  //       //       const cardData: CardData = {
  //       //         cardName: c.cardName,
  //       //         cardActualTime: c.cardActualTime,
  //       //         cardDate: c.cardDate
  //       //       };
  //       //       this.results.push(cardData);
  //       //     });
  //       //   });
  //       //   console.log('results', this.results);
  //     }
  //         );
  //   } catch(error) {
  //     console.error('GET all cards fail');
  //   }

  // }


}
