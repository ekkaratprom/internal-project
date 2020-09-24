import { CardForm } from './card-form.model';
import { Form } from './card-form-test.model';
import { Injectable } from '@angular/core';
import {
  HttpClient, HttpErrorResponse,
  HttpHeaders,
  HttpResponse,
  HttpParams,
} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardFormService {
  url = `http://10.187.1.33:8080/MyGuild/account`;

  constructor(private http: HttpClient) { }

  get(assignee: string) {
    const getOptions = {
      params: { assignee }
    };
    return this.http.get<CardsResponse>('Cards', getOptions)
      .pipe(
        map((response: CardsResponse) => {
          return response.Cards;
        }),
        catchError(this.handleError)
      );
  }

  add(Card: Card) {
    return this.http.post('Cards', Card)
      .pipe(
        catchError(this.handleError)
      );
  }

  addForm(form: any): Observable<HttpResponse<Form>> {
    return this.http.post<Form>(this.url, form, { observe: 'response' });
  }

  delete(Card: Card) {
    return this.http.delete(`Cards/${Card.id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error.message);
    return throwError('A data error occurred, please try again.');
  }
}

interface CardsResponse {
  Cards: Card[];
}

export interface Card {
  id: string;
  assignee: string;
  description: string;
  projectName: string;
  referenceLink: string;
  estimateTime: number;
  actualTime: number;
  billableTime: number;
  timeStamp: string;
}