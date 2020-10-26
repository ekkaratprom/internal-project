import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardResponse } from './card.model';
import {
  HttpClient, HttpErrorResponse,
  HttpHeaders,
  HttpResponse,
  HttpParams,
} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CardService {
  url = `http://10.187.1.33:8081/siesta/api/v2/`;

  constructor(private http: HttpClient) { }

  getAllCard(): Observable<CardResponse[]> {
    return this.http.get<CardResponse[]>(this.url + 'task');

  }

  getCardByDate(taskDate: string): Observable<CardResponse[]> {
    return this.http.get<CardResponse[]>(this.url + 'task/' + taskDate);
  }

}
