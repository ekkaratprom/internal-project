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
  results: CardData[] = [];
  cards;
  toggle1 = false;
  toggle2 = false;

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
      console.error('GET all assignments fail');
    }
  }


  getAllCards(): void {
    try {
      this.assignmentService.getAllCards().subscribe((res) => {
        this.cards = res;
        console.log('cardList', this.cardLists);

        this.cards.forEach(card => {
          console.log('card', card);
          card.cardObj.forEach(c => {
            const cardData: CardData = {
              cardName: c.cardName,
              cardActualTime: c.cardActualTime,
              cardDate: c.cardDate
            };
            this.results.push(cardData);
          });
        });
        console.log('results', this.results);

      });
    } catch (error) {
      console.error('GET all cards fail');
    }

  }

  changeType(input_field_password, num) {
    if (input_field_password.type == "password")
      input_field_password.type = "text";
    else
      input_field_password.type = "password";

    if (num == 1)
      this.toggle1 = !this.toggle1;
    else
      this.toggle2 = !this.toggle2;
  }

}
