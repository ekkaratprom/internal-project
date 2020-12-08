import { QueueviewserviceService } from './../queueviewservice.service';
import { AssignmentService } from './shared/assignment.service';
import { Assignment, AssignmentResponse, CardList, CardObj, ProjectSent } from './shared/assignment-model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal, NgbModalRef, ModalDismissReasons, NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ThemePalette } from '@angular/material/core';

export interface CardData {
  cardName: string;
  cardActualTime: number;
  cardDate: string;
}

export interface CardDetail {
  assignmentId: number;
  assignmentName: string;
  billableTime: number;
  completedStatus: boolean;
  estimateTime: number;
  totalActualTime: number;
}


@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.css']
})
export class AssignmentListComponent implements OnInit, DoCheck {
  @Input() assignmentForm: any;
  @Input() isReloadAssignment: boolean;
  @Output() isReloadAssignmentChange = new EventEmitter<boolean>();
  @Output() updateDelete = new EventEmitter<any>();
  assignmentsearchText = '';
  ProjectName = undefined;
  completedStatusCheck = undefined;
  assignments: AssignmentResponse[] = [];
  cardLists: CardList;
  results: CardData[] = [];
  cards;
  closeResult = '';
  cardDetail;
  toggle1 = false;
  toggle2 = false;
  result = [];
  cObj = [];
  modalReference: NgbModalRef;
  kevin = false;
  completeStatus = false;
  assigmentId;
  projectList;
  status;
  completedStatus;
  indexSelected;
  collapesdId;
  public isCollapsed: boolean = true;
  project: ProjectSent;


  value;
  colorwarn: ThemePalette = 'warn';
  today;
  colorprim: ThemePalette = 'primary';

  constructor(private qv: QueueviewserviceService, private assignmentService: AssignmentService,
    private modalService: NgbModal, private router: Router, private calendar: NgbCalendar) {

  }

  public addProject = new FormGroup({
    projectName: new FormControl(null, Validators.compose([
      Validators.required,
      Validators.pattern('[\\w\\-\\s\\/]+')
    ]))
  });

  onSubmit(): void {
    this.project = {
      projectName: this.addProject.get('projectName').value,
    };
    console.log(this.project);

    this.assignmentService.addProject(this.project)
      .subscribe((r) => {
        console.log(r);
      });
  }

  ngOnInit(): void {
    // this.getAllAssignmentCards();
    // console.log('ngOnInit');
    this.getAllCards();
    this.today = new Date();
    this.getAllProject();
    console.log('Today', this.today);

  }

  ngDoCheck(): void {
    // console.log('assign-list - ngDoCheck', this.isReloadAssignment);
    if (this.isReloadAssignment === true) {
      this.getAllCards();
      // this.isReloadAssignment = false;
      // this.isReLoadChange.emit(this.isReloadAssignment);
    }
  }

  open(content): void {
    this.modalReference = this.modalService.open(content, { size: 'md' });
  }

  getAllProject(): void {
    try {
      this.assignmentService.getAllProject().subscribe((res) => {
        this.projectList = res;
      });
    } catch (error) {
      console.error('GET all project fail');
    }
  }

  openclosemodal(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }





  submit(): void {
    this.getAllCards();
  }

  close(): void {
    this.modalReference.close();
    console.log('close');
  }

  updateDeleteStatus(id: string): void {
    const deleteStatus = true;
    const assignmentId = id;
    // debugger;
    this.status = {
      deletedStatus: deleteStatus,
    };
    try {
      this.assignmentService.updateDeleteStatusAssignment(assignmentId, this.status)
        .subscribe((r) => {
          console.log('Update Delete assignment', r);
          // this.result[index].deletedStatus = deleteStatus;
          this.getAllCards();
          this.updateDelete.emit();
        });
      console.log('id', id);
      console.log('Delete status', this.status);

    } catch (error) {
      alert('Delete fail');
    }

  }


  updateStatus(index, id: string, statusChange: boolean): void {
    this.status = {
      completedStatus: statusChange,
    };
    this.assignmentService.updateCompleteAssignment(id, this.status)
      .subscribe((r) => {
        console.log('result assignment', r);
        this.result[index].completedStatus = statusChange;
      });
    // console.log('id=', id);
    // console.log('status=' , this.status);



  }




  getAllAssignmentCards(): void {
    try {
      this.assignmentService
        .getAllAssignments()
        .subscribe(res => {
          this.assignments = res;
          // console.log(this.assignments);
        }
          ,
          (error) => {
            console.log('Get Assignment error: ', error);
          }
        );
    } catch (error) {
      console.error('GET all assignments fail');
    }
  }
  toggle(index, id: string, status: boolean): void {
    let value1;

    if (status === true) {
      this.completedStatus = false;
      value1 = 'undone';
    }
    if (status === false) {
      this.completedStatus = true;

      value1 = 'done';
    }
    this.updateStatus(index, id, this.completedStatus);
    console.log('completedStatus', this.completedStatus);
    alert('Change completed status to ' + value1);

  }

  test2() {
    console.log('test2');
    this.qv.settest(this.kevin);
    this.kevin = !this.kevin;
  }

  collapsed(id: string): void {
    this.collapesdId = id;
  }

  compareMoreThanEndDate(endDate: any): boolean {
    const date1 = new Date(this.today);
    const date2 = new Date(endDate);
    if (date2.getTime() <= date1.getTime()) {
      return true;
    } else { return false; }
  }


  getAllCards(): void {
    try {
      this.assignmentService
        .getAllCards()
        .subscribe((res) => {
          this.result = [];
          this.cards = res;
          // console.log('cards', this.cards);
          this.cards.forEach(element => {
            // clear
            this.cObj = [];
            element.cardObj.forEach(c => {
              const cardObj = {
                cardName: c.cardName,
                cardActualTime: c.cardActualTime,
                cardDate: c.cardDate,
              };
              this.cObj.push(cardObj);
            });
            const cardDetail = {
              projectName: element.projectName,
              assignmentId: element.assignmentId,
              assignmentName: element.assignmentName,
              billableTime: element.billableTime,
              completedStatus: element.completedStatus,
              estimateTime: element.estimateTime,
              endDate: element.endDate,
              totalActualTime: element.totalActualTime,
              totalEstimateTime: element.totalEstimateTime,
              isCollapsed: true,
              cardObj: this.cObj,
            };
            this.result.push(cardDetail);
          });
          // console.log('result', this.result);
          if (this.isReloadAssignment === true) {
            this.isReloadAssignment = false;
            this.isReloadAssignmentChange.emit(this.isReloadAssignment);
          }
        }
        );
    } catch (error) {
      console.error('GET all cards fail');
    }
  }
}
