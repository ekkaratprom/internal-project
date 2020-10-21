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
  url = `http://localhost:8080/api/`;

  constructor(private http: HttpClient) { }

  getUserAvailiability(): Observable<UserResponse> {
    return this.http.get<UserResponse>(this.url + 'v1/availabletime');
  }


}
