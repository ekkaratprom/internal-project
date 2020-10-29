import { environment } from './../../../environments/environment';
import { Assignment, Project, AssignmentResponse, CardList } from './assignment-model';
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
    return this.http.get<AssignmentResponse[]>(`${environment.apiUrl}` + 'v1/card');
  }

  //GET ALL Card 
  getAllCards(): Observable<CardList> {
    return this.http.get<CardList>(`${environment.apiUrl}` + 'v1/card');
  }
}
