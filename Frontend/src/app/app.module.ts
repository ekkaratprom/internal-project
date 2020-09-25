import { FilterPipe } from './card/filter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';


import { HttpClientModule } from '@angular/common/http';
import { CardFormComponent } from './card-form/card-form.component';
import { CardPersonRowComponent } from './card-person-row/card-person-row.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, NavbarComponent, CardComponent, CardFormComponent, FilterPipe, CardPersonRowComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule,
    ReactiveFormsModule,
    NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
