import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  constructor(private formBuilder: FormBuilder,
    private cardFormService: CardFormService,
    private router: Router) { }

  card: CardForm;
  form: FormGroup;
  userId: number;
  projectId: number;

  @Output() cardChange = new EventEmitter();


  // userList = [
  //   { userId: 1, assignee: 'yuppry ryla' },
  //   { userId: 2, assignee: 'big ekkarat' },
  //   { userId: 3, assignee: 'kerati kasisuwan' },
  //   { userId: 4, assignee: 'view atcharee' },
  //   { userId: 5, assignee: 'Tanta Wan' },
  //   { userId: 6, assignee: 'Helena Groz' },
  //   { userId: 7, assignee: 'Selena Razza' }
  // ];
  userList = [];

  // projectList = [
  //   { projectId: 1, projectName: 'armonia' },
  //   { projectId: 2, projectName: 'siesta' },
  //   { projectId: 3, projectName: 'olivia' },
  //   { projectId: 4, projectName: 'Starving' },
  //   { projectId: 5, projectName: 'Anaconda' }
  // ];
  projectList = [];

  public addForm = new FormGroup({
    userId: new FormControl('1', Validators.compose([
      Validators.required,
      Validators.pattern('^[0-9].*$')
    ])),
    taskName: new FormControl(null, Validators.compose([
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

  getAllAssignee(): void {
    this.cardFormService.getAllAssignee().subscribe((res) => {
      this.userList = res;
    });
  }
  getAllProject(): void {
    this.cardFormService.getAllProject().subscribe((res) => {
      this.projectList = res;
    });
  }

  public saveUser(e): void {
    const assignee = e.target.value;
    const list = this.userList.filter(x => x.assignee === assignee)[0];
    // console.log(list.userId);
  }

  public saveProject(e): void {
    const project = e.target.value;
    const list = this.projectList.filter(x => x.projectName === project)[0];
    console.log(list.projectId);
  }

  ngOnInit(): void {
    this.getAllAssignee();
    this.getAllProject();
  }



  onSubmit() {

    const currentDate = new Date();
    this.card = {
      actualTime: parseFloat(this.addForm.get('actualTime').value),
      completedStatus: true,
      estimateTime: parseFloat(this.addForm.get('estimateTime').value),
      projectId: parseInt(this.addForm.get('projectId').value),
      referenceLink: this.addForm.get('referenceLink').value,
      taskDate: currentDate.toISOString().split('T')[0],
      taskName: this.addForm.get('taskName').value,
      userId: parseInt(this.addForm.get('userId').value),
      billableTime: parseFloat(this.addForm.get('billableTime').value)
    }

    console.log(this.card);
    this.cardFormService.addForm(this.card)
      .subscribe((res) => {
        console.log(res)
        // this.router.navigateByUrl(['/',]);
      });
    this.cardChange.emit('submit');
  }


  onCancel(): void {
    this.cardChange.emit('cancel');
  }

}
