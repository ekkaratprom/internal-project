import { Assignment } from './assignment-list/shared/assignment-model';
import { AssignmentService } from './assignment-list/shared/assignment.service';
import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal, NgbModalRef, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-queue-view',
  templateUrl: './queue-view.component.html',
  styleUrls: ['./queue-view.component.css']
})
export class QueueViewComponent implements OnInit {
  modalReference: NgbModalRef;
  assignments: Assignment[] = [];

  constructor(private modalService: NgbModal,
    private assignmentService: AssignmentService) { }

  ngOnInit(): void {
    this.getAllAssignmentCards();

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
      console.error('GET all fail naja.');
    }

  }




}
