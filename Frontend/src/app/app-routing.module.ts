import { AvaliableFormComponent } from './avaliable-form/avaliable-form.component';
import { AssignmentListComponent } from './assignment-list/assignment-list.component';
import { CardPersonRowComponent } from './card-person-row/card-person-row.component';
import { QueueViewComponent } from './queue-view/queue-view.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvaliableTimeComponent } from './avaliable-time/avaliable-time.component';

const routes: Routes = [
  { path: '', component: QueueViewComponent },
  { path: 'card', component: CardPersonRowComponent },
  { path: 'assignment-list', component: AssignmentListComponent },
  { path: 'available-time', component: AvaliableTimeComponent },
  { path: 'available-form', component: AvaliableFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
