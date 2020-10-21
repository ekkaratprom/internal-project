import { AssignmentService } from './../assignment-list/shared/assignment.service';
import { Assignment, AssignmentResponse } from './../assignment-list/shared/assignment-model';
import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal, NgbModalRef, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-avaliable-time',
  templateUrl: './avaliable-time.component.html',
  styleUrls: ['./avaliable-time.component.css']
})
export class AvaliableTimeComponent implements OnInit {
  assignments: AssignmentResponse[] = [];
  searchText = '';
  completedStatusCheck = undefined;
  modalReference: NgbModalRef;
  color = [0, 3, 6, 8];
  skillsets = ['angular', 'bootstrap', 'html5'];
  x = ['nine', 'big', 'p_view', 'p_joy', 'p_jum'];
  constructor(private modalService: NgbModal,
    // tslint:disable-next-line: align
    private assignmentService: AssignmentService) { }

  ngOnInit(): void {
    this.getAllAssignmentCards();
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

  open(content): void {
    this.modalReference = this.modalService.open(content, { size: 'sm' });
  }

  close(): void {
    this.modalReference.close();
  }
}
