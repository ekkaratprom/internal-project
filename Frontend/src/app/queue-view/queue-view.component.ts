import { AssignmentService } from './../assignment-list/shared/assignment.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Assignment, AssignmentResponse } from './../assignment-list/shared/assignment-model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModalConfig, NgbModal, NgbModalRef, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-queue-view',
  templateUrl: './queue-view.component.html',
  styleUrls: ['./queue-view.component.css']
})
export class QueueViewComponent implements OnInit {
  @Output() reload  = new EventEmitter();
  searchText = '';
  completedStatusCheck = undefined;
  date = {};
  dateSent;
  photo = 'https://www.freepik.com/free-photo/mountains-nature-landscape_1253947.htm#page=1&query=mountain&position=16';
  reloadAssignment = undefined;

  modalReference: NgbModalRef;
  assignments: AssignmentResponse[] = [];
  isReLoad = false;
  isReloadAssignment = false ;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  checkValue(): void {
    //console.log(this.completedStatusCheck);
  }

  collectDate(e): void {
    this.date = e;
  }

  collectDateOnNextBack(e): void{
    this.dateSent = e;
    // console.log(e)
    // console.log(this.dateSent)

  }

  setReload(value): void {
    this.isReLoad = value;
    console.log('setReload', this.isReLoad);
  }

  setReloadAssignment(value): void {
    this.isReloadAssignment = value;
    console.log('isReloadAssignment', this.isReloadAssignment);
  }

}
