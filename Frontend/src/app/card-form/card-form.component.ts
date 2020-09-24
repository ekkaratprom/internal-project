import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CardFormService } from './shared/card-from.service';
import { CardForm } from './shared/card-form.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {
  card: CardForm;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private cardFormService: CardFormService,
    private router: Router) { }

  public addForm = new FormGroup({
    userId: new FormControl('1', Validators.compose([
      Validators.required,
      Validators.pattern('^[0-9].*$')
    ])),
    taskName: new FormControl('write card component', Validators.compose([
      Validators.required,
    ])),
    projectId: new FormControl('1', Validators.compose([
      Validators.required,
      Validators.pattern('[\\w\\-\\s\\/]+')
    ])),
    referenceLink: new FormControl('gg.com', Validators.compose([
      Validators.required,

    ])),
    estimateTime: new FormControl('4', Validators.compose([
      Validators.required,
      Validators.pattern('^[0-9].*$')
    ])),
    actualTime: new FormControl('3.5', Validators.compose([
      Validators.pattern('^[0-9].*$')
    ])),
    billableTime: new FormControl('4', Validators.compose([
      Validators.pattern('^[0-9].*$')
    ])),
  });

  ngOnInit(): void { }

  onSubmit() {
    const currentDate = new Date();
    this.card = {
      actualTime: parseInt(this.addForm.get('actualTime').value),
      completedStatus: true,
      estimateTime: parseInt(this.addForm.get('estimateTime').value),
      projectId: parseInt(this.addForm.get('projectId').value),
      referenceLink: this.addForm.get('referenceLink').value,
      taskDate: currentDate.toUTCString(),
      taskName: this.addForm.get('taskName').value,
      userId: parseInt(this.addForm.get('userId').value),
      billableTime: parseInt(this.addForm.get('billableTime').value)
    }

    console.log(this.card);
    this.cardFormService.addForm(this.card)
      .subscribe((res) => {
        console.log(res)
        // this.router.navigateByUrl(['/',]);
      });

  }

}
