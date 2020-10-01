import { CardForm, User, Project } from './card-form.model';
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
  url = `http://localhost:8080/api/`;

  constructor(private http: HttpClient) { }

  //POST 
  addForm(cardForm: any): Observable<HttpResponse<CardForm>> {
    return this.http.post<CardForm>(this.url + 'v1/addtask', cardForm, { observe: 'response' });
  }

  //GET 
  getAllAssignee(): Observable<User[]> {
    return this.http.get<User[]>(this.url + 'v2/user');
  }

  //GET 
  getAllProject(): Observable<Project[]> {
    return this.http.get<Project[]>(this.url + 'v1/project');
  }

  // get(assignee: string) {
  //   const getOptions = {
  //     params: { assignee }
  //   };
  //   return this.http.get<CardsResponse>('Cards', getOptions)
  //     .pipe(
  //       map((response: CardsResponse) => {
  //         return response.Cards;
  //       }),
  //       catchError(this.handleError)
  //     );
  // }

  // add(card: Card) {
  //   return this.http.post('Cards', card)
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }

  // delete(card: Card) {
  //   return this.http.delete(`Cards/${card.userId}`)
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }

  // private handleError(error: HttpErrorResponse) {
  //   console.error(error.message);
  //   return throwError('A data error occurred, please try again.');
  // }
}

// interface CardsResponse {
//   Cards: Card[];
// }

// export interface Card {
//   userId: number;
//   taskName: string;
//   projectId: string;
//   referenceLink: string;
//   estimateTime: number;
//   actualTime: number;
//   billableTime: number;
//   taskDate: string;
//   completedStatus?: boolean;
// }