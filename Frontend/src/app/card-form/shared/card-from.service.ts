import { environment } from './../../../environments/environment';
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

  constructor(private http: HttpClient) { }

  //POST 
  addForm(cardForm: any): Observable<HttpResponse<CardForm>> {
    return this.http.post<CardForm>(`${environment.apiUrl}` + 'v1/addtask', cardForm, { observe: 'response' });
  }

  //GET 
  getAllAssignee(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}` + 'v2/user');
  }

  //GET 
  getAllProject(): Observable<Project[]> {
    return this.http.get<Project[]>(`${environment.apiUrl}` + 'v1/projects');
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


