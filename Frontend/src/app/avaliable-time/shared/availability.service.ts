import { environment } from './../../../environments/environment';
import { Total, UserResponse, Skill, Skills,DeleteStatus } from './availiability-model';
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

  updateCard(id: any, actual: any): Observable<HttpResponse<Total[]>> {
    return this.http.patch<Total[]>(`${environment.apiUrl}v1/${id}/updatecard`, actual, {
      observe: 'response',
    });
  }

  updateDeleteStatusCard(id: any, status: any): Observable<HttpResponse<DeleteStatus[]>> {
    // /siesta/api/v1/{id}/updatedeletestatus

    return this.http.patch<DeleteStatus[]>(`${environment.apiUrl}v1/${id}/updatedeletestatus`, status, {
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
