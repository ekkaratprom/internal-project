import { CardService } from './shared/card.service';
import { Component, OnInit, NgModule } from '@angular/core';
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

  // open(content) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getAllForm().subscribe((res) => {
      this.cardResponse = res;
      console.log(this.cards)
      this.cards.push({
        name: this.cardResponse.name,
        id: 1,
        projectId: this.cardResponse.projectId,
        projectName: this.cardResponse.projectName,
        taskName: this.cardResponse.taskName,
        estimateTime: this.cardResponse.estimateTime,
        actualTime: this.cardResponse.actualTime,
        referenceLink: this.cardResponse.referenceLink,
        taskDate: this.cardResponse.taskDate,
        completedStatus: this.cardResponse.completedStatus,
        billableTime: this.cardResponse.billableTime
      },
      );

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

  // getAll(): void {
  //   this.service.getAllform().subscribe((res) => {
  //     this.CardResponse = res;

  //   })
  // }
}
