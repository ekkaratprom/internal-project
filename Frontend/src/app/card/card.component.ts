import { Component, OnInit, NgModule } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { Card } from './shared/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  cards: Card[] = [];
  searchText = '';
  characters = [
    'big',
    'nine',
    'p\' jum',
    'p\' toh',
    'p\' kwang',
    'p\' joy',
    'p\' view',
    'year',
  ];

  constructor() {
    this.cards.push({
      name: 'nine',
      id: 1,
      projectId: 2,
      projectName: 'AllianzProject01',
      taskName: 'create card component',
      estimateTime: 6,
      actualTime: 12,
      referenceLink: 'www.sdfsfsd.com',
      taskDate: '08/12/56',
      completedStatus: true,
      billableTime: 5
    },
      {
        name: 'Big',
        id: 2,
        projectId: 2,
        projectName: 'AllianzProject01',
        taskName: 'create NavBar component',
        estimateTime: 8,
        actualTime: 16,
        referenceLink: 'www.asasfafasfasfas.com',
        taskDate: '15/12/56',
        completedStatus: true,
        billableTime: 5
      }
    );
  }



  addCard(): void {
    const newperson = 'new person';
    this.cards.push({
      name: 'new person',
      id: 0,
      projectId: 0,
      projectName: '-',
      taskName: '-',
      estimateTime: 0,
      actualTime: 0,
      referenceLink: '-',
      taskDate: '-',
      completedStatus: true,
      billableTime: 0
    }
    );
  }
}
