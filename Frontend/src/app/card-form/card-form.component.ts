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
    assignee: new FormControl('Ekkarat', Validators.compose([
      Validators.required,
      Validators.pattern('[\\w\\-\\s\\/]+')
    ])),
    description: new FormControl('write card component', Validators.compose([
      Validators.required,
    ])),
    project: new FormControl('project01', Validators.compose([
      Validators.required,
      Validators.pattern('[\\w\\-\\s\\/]+')
    ])),
    link: new FormControl('gg.com', Validators.compose([
      Validators.required,

    ])),
    estimate: new FormControl('4', Validators.compose([
      Validators.required,
      Validators.pattern('^[0-9].*$')
    ])),
    actual: new FormControl('3.5', Validators.compose([
      Validators.pattern('^[0-9].*$')
    ])),
    billable: new FormControl('4', Validators.compose([
      Validators.pattern('^[0-9].*$')
    ])),
  });

  ngOnInit(): void { }

  onSubmit() {
    const currentDate = new Date();
    this.card = new CardForm(
      this.addForm.get('assignee').value,
      this.addForm.get('description').value,
      this.addForm.get('project').value,
      this.addForm.get('link').value,
      this.addForm.get('estimate').value,
      this.addForm.get('actual').value,
      this.addForm.get('billable').value,
      currentDate.toUTCString(),
    );
    console.log(this.card);
    this.cardFormService.addForm(this.card)
      .subscribe(() => {
        // this.router.navigateByUrl(['/',]);
      });

  }

}
