import { CardService } from './shared/card.service';
import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { CardResponse } from './shared/card.model';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  cardResponse: CardResponse;

  cards: CardResponse[] = [];
  referenceLink = '';
  searchText = '';
  constructor(config: NgbModalConfig, private modalService: NgbModal, public service: CardService) {


  }
  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getAllForm().subscribe((res) => {
      this.cardResponse = res;
      console.log(this.cards)


    })
  }

  open(content) {
    this.modalService.open(content, { size: 'sm' });
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
