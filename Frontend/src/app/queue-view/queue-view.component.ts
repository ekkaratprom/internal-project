import { AssignmentService } from './../assignment-list/shared/assignment.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Assignment, AssignmentResponse } from './../assignment-list/shared/assignment-model';
import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal, NgbModalRef, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-queue-view',
  templateUrl: './queue-view.component.html',
  styleUrls: ['./queue-view.component.css']
})
export class QueueViewComponent implements OnInit {
  searchText = '';
  completedStatusCheck = undefined;

  modalReference: NgbModalRef;
  assignments: AssignmentResponse[] = [];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  checkValue(): void {
    console.log(this.completedStatusCheck);
  }



}
