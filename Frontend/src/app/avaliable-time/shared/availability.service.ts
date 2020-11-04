import { environment } from './../../../environments/environment';
import { Actual, UserResponse, Skill, Skills } from './availiability-model';
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
export class AvailabilityService {

  constructor(private http: HttpClient) { }

  getUserAvailiability(): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${environment.apiUrl}` + 'v1/availabletime');
  }

  updateCard(id: any, actual: any): Observable<HttpResponse<Actual[]>> {

    // /siesta/api/v1/{id}/updatecard
    //
    return this.http.patch<Actual[]>(`${environment.apiUrl}v1/${id}/updatecard`, actual, {
      // return this.http.patch<Actual[]>(`https://jsonplaceholder.typicode.com/posts/1`, actual, {
      observe: 'response',
    });
  }

  getAllPosition(): Observable<Position[]> {
    return this.http.get<Position[]>(`${environment.apiUrl}` + 'v1/getallposition');
  }

  getAllSkill(): Observable<Skills[]> {
    return this.http.get<Skills[]>(`${environment.apiUrl}` + 'v1/skill');
  }


}
