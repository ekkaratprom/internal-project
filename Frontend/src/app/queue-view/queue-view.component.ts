import { FormBuilder, FormGroup } from '@angular/forms';
import { Assignment } from './assignment-list/shared/assignment-model';
import { AssignmentResponse } from './assignment-list/shared/assignment-model';
import { AssignmentService } from './assignment-list/shared/assignment.service';
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

  constructor(private modalService: NgbModal,
    private assignmentService: AssignmentService) { }

  ngOnInit(): void {
    this.getAllAssignmentCards();
  }
  checkValue(): void {
    console.log(this.completedStatusCheck);
  }


  open(content): void {
    this.modalReference = this.modalService.open(content, { size: 'sm' });
  }

  close(): void {
    this.modalReference.close();
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




}
