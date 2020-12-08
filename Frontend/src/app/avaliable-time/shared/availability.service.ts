import { environment } from './../../../environments/environment';
import { Actual, UserResponse, Skill, Skills,DeleteStatus, UpdateCards } from './availiability-model';
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

  //more than one card /siesta/api/v2/updatecards
  updateCards(card: any): Observable<HttpResponse<UpdateCards[]>> {
    return this.http.patch<UpdateCards[]>(`${environment.apiUrl}/v2/updatecards`, card, {
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
