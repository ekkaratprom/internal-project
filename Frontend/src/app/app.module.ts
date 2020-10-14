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
import { CardFormComponent } from './card-form/card-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QueueViewComponent } from './queue-view/queue-view.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { AvaliableTimeComponent } from './queue-view/avaliable-time/avaliable-time.component';
@NgModule({
  declarations: [AppComponent, CardComponent, CardFormComponent, FilterPipe, CardPersonRowComponent, QueueViewComponent, DatepickerComponent, NavbarComponent, AvaliableTimeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule,
    ReactiveFormsModule,
    NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
