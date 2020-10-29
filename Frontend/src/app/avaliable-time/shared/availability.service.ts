import { environment } from './../../../environments/environment';
import { UserResponse } from './availiability-model';
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


}
