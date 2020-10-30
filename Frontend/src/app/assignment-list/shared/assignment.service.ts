import { environment } from './../../../environments/environment';
import { Assignment, Project, AssignmentResponse, CardList, AssignmentList, CardForm } from './assignment-model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  HttpClient, HttpErrorResponse,
  HttpHeaders,
  HttpResponse,
  HttpParams,
} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  constructor(private http: HttpClient) { }

  //POST 
  addAssignment(assignmentForm: any): Observable<HttpResponse<Assignment>> {
    return this.http.post<Assignment>(`${environment.apiUrl}` + 'v1/addAssignment', assignmentForm, { observe: 'response' });
  }

  //GET 
  getAllProject(): Observable<Project[]> {
    return this.http.get<Project[]>(`${environment.apiUrl}` + 'v1/project');
  }

  //GET ALL ASS
  getAllAssignments(): Observable<AssignmentResponse[]> {
    return this.http.get<AssignmentResponse[]>(`${environment.apiUrl}` + 'v1/assignment');
  }

  //GET ALL Card 
  getAllCards(): Observable<CardList> {
    return this.http.get<CardList>(`${environment.apiUrl}` + 'v1/card');
  }

  // AssignmentList
  getAllAssignmentList(): Observable<AssignmentList[]> {
    return this.http.get<AssignmentList[]>(`${environment.apiUrl}` + 'v2/assignmentlist');
  }

  //POST 
  addCard(cardForm: any): Observable<HttpResponse<CardForm>> {
    return this.http.post<CardForm>(`${environment.apiUrl}` + 'v1/addcard', cardForm, { observe: 'response' });
  }

}
