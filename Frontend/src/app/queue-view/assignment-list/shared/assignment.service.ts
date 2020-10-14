import { Assignment, Project } from './assignment-model';
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
  url = `http://localhost:8080/api/`;

  constructor(private http: HttpClient) { }

  //POST 
  addAssignment(cardForm: any): Observable<HttpResponse<Assignment>> {
    return this.http.post<Assignment>(this.url + 'v1/addAssignment', cardForm, { observe: 'response' });
  }

  //GET 
  getAllProject(): Observable<Project[]> {
    return this.http.get<Project[]>(this.url + 'v1/project');
  }
}
