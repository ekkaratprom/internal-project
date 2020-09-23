import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CardFormService } from './shared/card-from.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private cardFormService: CardFormService,
    private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      assignee: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      description: this.formBuilder.control('', Validators.compose([
        Validators.required,
      ])),
      project: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      link: this.formBuilder.control('', Validators.compose([
        Validators.required,

      ])),
      estimate: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9].*$')
      ])),
      actual: this.formBuilder.control('', Validators.compose([
        Validators.pattern('^[0-9].*$')
      ])),
      billable: this.formBuilder.control('', Validators.compose([
        Validators.pattern('^[0-9].*$')
      ])),

    });
  }

  onSubmit() {
    console.log(this.form);

  }

}
