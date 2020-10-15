import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal, NgbModalRef, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-queue-view',
  templateUrl: './queue-view.component.html',
  styleUrls: ['./queue-view.component.css']
})
export class QueueViewComponent implements OnInit {
  searchText = '';
  completedStatusCheck = null;
  constructor() { }

  ngOnInit(): void {
  }
  checkValue(): void {
    console.log(this.completedStatusCheck);
  }
}
