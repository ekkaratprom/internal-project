import { environment } from './../../../environments/environment';
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

  constructor(private http: HttpClient) { }

  getAllCard(): Observable<CardResponse[]> {
    return this.http.get<CardResponse[]>(`${environment.apiUrl}` + 'v2/task');

  }

  getCardByDate(taskDate: string): Observable<CardResponse[]> {
    return this.http.get<CardResponse[]>(`${environment.apiUrl}` + 'v2/task/' + taskDate);
  }

}
