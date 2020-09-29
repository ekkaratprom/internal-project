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
  url = `http://localhost:8080/api/v2/task`;

  constructor(private http: HttpClient) { }
  getAllForm(): Observable<CardResponse> {
    return this.http.get<CardResponse>(this.url);
  }
}
