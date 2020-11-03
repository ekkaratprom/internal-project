import { environment } from './../../../environments/environment';
import { Actual, UserResponse } from './availiability-model';
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
    // debugger;
    // /siesta/api/v1/{id}/updatecard
    //
    return this.http.patch<Actual[]>(`${environment.apiUrl}v1/${id}/updatecard`, actual, {
      // return this.http.patch<Actual[]>(`https://jsonplaceholder.typicode.com/posts/1`, actual, {
      observe: 'response',
    });
  }


}
