import { environment } from './../../../environments/environment';
// tslint:disable-next-line: max-line-length
import { Assignment, Project, AssignmentResponse, AssignmentList, CardForm, DeletedStatusAssignment, CompleteStatus, CardLists, ProjectSent } from './assignment-model';
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

  //POST /v1/addProject
  addProject(projectName: any): Observable<HttpResponse<ProjectSent>> {
    return this.http.post<ProjectSent>(`${environment.apiUrl}` + 'v1/addProject', projectName, { observe: 'response' });
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
  getAllCards(): Observable<CardLists> {
    return this.http.get<CardLists>(`${environment.apiUrl}` + 'v1/card');
  }

  // AssignmentList
  getAllAssignmentList(): Observable<AssignmentList[]> {
    return this.http.get<AssignmentList[]>(`${environment.apiUrl}` + 'v2/assignmentlist');
  }

  //POST
  addCard(cardForm: any): Observable<HttpResponse<CardForm[]>> {
    return this.http.post<CardForm[]>(`${environment.apiUrl}` + 'v2/addcards', cardForm, { observe: 'response' });
  }

  //PATCH
  editCard(cardForm: any): Observable<HttpResponse<CardForm>> {
    return this.http.post<CardForm>(`${environment.apiUrl}` + 'v1/addcard', cardForm, { observe: 'response' });
  }

  updateCompleteAssignment(id: any, status: any): Observable<HttpResponse<CompleteStatus[]>> {
    // /siesta/api/v1/{id}/updateassignment
    return this.http.patch<CompleteStatus[]>(`${environment.apiUrl}v1/${id}/updateassignment`, status, {
      observe: 'response',
    });
  }

  updateDeleteStatusAssignment(id: any, status: any): Observable<HttpResponse<DeletedStatusAssignment[]>> {
    // /siesta/api/v1/{id}/deleteassignment
    return this.http.patch<DeletedStatusAssignment[]>(`${environment.apiUrl}v1/${id}/deleteassignment`, status, {
      observe: 'response',
    });
  }



}
