import { SkillPipe } from './avaliable-time/skillset.pipe';
import { PositionPipe } from './avaliable-time/position.pipe';
import { NamePipe } from './avaliable-time/name.pipe';
import { CompleteStatusPipe } from './assignment-list/shared/completestatusfilter.pipe';
import { ColorPipe } from './avaliable-time/color.pipe';
import { AssignmentListComponent } from './assignment-list/assignment-list.component';
import { AssignmentPipe } from './assignment-list/shared/assignmentfilter.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { CardPersonRowComponent } from './card-person-row/card-person-row.component';
import { FilterPipe } from './card/filter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CardFormComponent } from './card-form/card-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QueueViewComponent } from './queue-view/queue-view.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { AvaliableTimeComponent } from './avaliable-time/avaliable-time.component';
import { AssignmentFormComponent } from './assignment-form/assignment-form.component';
import { AvaliableFormComponent } from './avaliable-form/avaliable-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardFormComponent,
    FilterPipe,
    CardPersonRowComponent,
    QueueViewComponent,
    DatepickerComponent,
    NavbarComponent,
    SkillPipe,
    AvaliableTimeComponent,
    AssignmentListComponent,
    AssignmentFormComponent,
    CompleteStatusPipe,
    AssignmentPipe,
    PositionPipe,
    NamePipe,
    AvaliableFormComponent,
    CompleteStatusPipe,
    ColorPipe,
    AssignmentPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
