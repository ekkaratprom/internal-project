import { FilterPipe } from './card/filter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { CardFormComponent } from './card-form/card-form.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, CardComponent, CardFormComponent,],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule,
    ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
