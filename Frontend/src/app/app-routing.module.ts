import { CardPersonRowComponent } from './card-person-row/card-person-row.component';
import { QueueViewComponent } from './queue-view/queue-view.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { from } from 'rxjs';

const routes: Routes = [
  { path: '', component: QueueViewComponent },
  { path: 'card', component: CardPersonRowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
