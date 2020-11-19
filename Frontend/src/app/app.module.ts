import { DeleteStatusPipe } from './assignment-list/deletestatus.pipe';
import { LongNamePipe } from './avaliable-time/longname.pipe';
import { TitleCompletedStatusPipe } from './assignment-list/titlecompletestatus.pipe';
import { ColorCompletedStatusPipe } from './assignment-list/completedstatus.pipe';
import { AvaliableFormComponent } from './avaliable-form/avaliable-form.component';
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
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CardFormComponent } from './card-form/card-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QueueViewComponent } from './queue-view/queue-view.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { AvaliableTimeComponent } from './avaliable-time/avaliable-time.component';
import { AssignmentFormComponent } from './assignment-form/assignment-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardFormComponent,
    TitleCompletedStatusPipe,
    FilterPipe,
    DeleteStatusPipe,
    CardPersonRowComponent,
    QueueViewComponent,
    DatepickerComponent,
    ColorCompletedStatusPipe,
    NavbarComponent,
    LongNamePipe,
    SkillPipe,
    AvaliableTimeComponent,
    CompleteStatusPipe,
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
    MatProgressBarModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    NgbModule,
    BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
