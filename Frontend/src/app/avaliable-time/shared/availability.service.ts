import { environment } from './../../../environments/environment';
import { Actual, DeleteStatus, UserResponse } from './availiability-model';
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
    return this.http.patch<Actual[]>(`${environment.apiUrl}v1/${id}/updatecard`, actual, {
      observe: 'response',
    });
  }

  updateDeleteStatusCard(id: any, status: any): Observable<HttpResponse<DeleteStatus[]>> {
    // /siesta/api/v1/{id}/updatedeletestatus

    return this.http.patch<DeleteStatus[]>(`${environment.apiUrl}v1/${id}/updatedeletestatus`, status, {
      observe: 'response',
    });
  }



}
