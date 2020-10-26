import { AvailabilityService } from './shared/availability.service';
import { MockAvaliabilityService } from './../service/mock-avaliability.service';
import { AssignmentService } from './../assignment-list/shared/assignment.service';
import { Assignment, AssignmentResponse } from './../assignment-list/shared/assignment-model';
import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal, NgbModalRef, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

export interface UserDetail {
  userId: number;
  fullName: string;
  position: string;
}


@Component({
  selector: 'app-avaliable-time',
  templateUrl: './avaliable-time.component.html',
  styleUrls: ['./avaliable-time.component.css']
})
export class AvaliableTimeComponent implements OnInit {
  assignments: AssignmentResponse[] = [];
  searchText = '';
  availibleUsers;
  positionCheck = null;
  skillsetCheck = null;
  userDetail;
  result = [];
  completedStatusCheck = undefined;
  modalReference: NgbModalRef;
  color = [0, 3, 6, 8, 4, 6, 8, 1, 2, 4, 0, 2, 7, 1, 5, 8, 9, 2, 2, 8, 1, 4, 5, 7, 3, 4, 7, 2, 4, 6];

  skillsets = ['angular', 'bootstrap', 'html5'];
  x = ['nine', 'big', 'p_view', 'p_joy', 'p_jum'];
  constructor(private modalService: NgbModal,
    // tslint:disable-next-line: align
    private assignmentService: AssignmentService,
    private availibilityService: AvailabilityService,
    private mockAvailibility: MockAvaliabilityService) { }

  ngOnInit(): void {
    this.getAllAssignmentCards();
    this.getAllUsersAvailiable();
  }

  getAllAssignmentCards(): void {
    try {
      this.assignmentService.getAllAssignments().subscribe(res => {
        this.assignments = res;
        // console.log(this.assignments);
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

  getAllUsersAvailiable(): void {
    try {
      this.availibilityService
        .getUserAvailiability()
        .subscribe((res) => {
          this.availibleUsers = res;

          console.log('availibleUsers', this.availibleUsers);

          this.availibleUsers.forEach(element => {
            const userDetail = {
              userId: element.userId,
              fullName: element.fullName,
              position: element.position,
            }
            this.result.push(userDetail);
          });
          console.log('result', this.result);



        }, (error) => {
          console.log('Get all Users Availiable error: ', error);
          this.availibleUsers = this.mockAvailibility.getUserAvailiability();

          this.availibleUsers.forEach(element => {
            const userDetail = {
              userId: element.userId,
              fullName: element.fullName,
              position: element.position,
            }
            this.result.push(userDetail);
          });
          console.log('result', this.result);


        });
    } catch (error) {
      console.error('GET All Users Availiable fail');
    }
  }


}
