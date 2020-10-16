import { AssignmentService } from './shared/assignment.service';
import { Assignment, AssignmentResponse, CardList, CardObj } from './shared/assignment-model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export interface CardData {
  cardName: string;
  cardActualTime: number;
  cardDate: string;
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
  cards: CardObj[];
  results: CardData[] = [];
  cardTest;

  public isCollapsed = true;
  constructor(private assignmentService: AssignmentService) { }

  ngOnInit(): void {
    this.getAllAssignmentCards();
    this.getAllCards();
  }

  getAllAssignmentCards(): void {
    try {
      this.assignmentService.getAllAssignments().subscribe(res => {
        this.assignments = res;
        console.log(this.assignments);
      });
    } catch (error) {
      console.error('GET all assignment fail');
    }
  }


  getAllCards(): void {
    try {
      this.assignmentService.getAllCards().subscribe((res) => {
        this.cardTest = res;
        console.log('cardList', this.cardLists);

        // this.cardTest.forEach(element => {
        //   console.log('element', element);
        //   const cardData: CardData = {
        //     cardName: element.cardName,
        //     cardActualTime: element.cardActualTime,
        //     cardDate: element.cardDate
        //   };
        //   this.results.push(cardData);
        // });
        this.cardTest.forEach(element => {
          console.log('element', element);
          element.cardObj.forEach(el => {
            const cardData: CardData = {
              cardName: el.cardName,
              cardActualTime: el.cardActualTime,
              cardDate: el.cardDate
            };
            this.results.push(cardData);
          });
        });
        console.log('results', this.results);
        // this.cards = this.cardLists.cardObj;

        // this.cards.forEach((card) => {
        //   const cardData: CardData = {
        //     cardName: card.cardName,
        //     cardActualTime: card.cardActualTime,
        //     cardDate: card.cardDate,
        //   };
        //   this.results.push(cardData);
        //   console.log(this.results);
        // });




      });
    } catch (error) {
      console.error('GET all card fail');
    }

  }

}
