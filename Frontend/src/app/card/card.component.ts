import { Component, OnInit, NgModule } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  searchText = '';
  characters = [
    'big',
    'nine',
    "p' jum",
    "p' toh",
    "p' kwang",
    "p' joy",
    "p' view",
    'year',
  ];
}
