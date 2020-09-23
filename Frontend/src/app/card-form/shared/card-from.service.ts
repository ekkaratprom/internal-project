import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardFormService {
  constructor(private http: HttpClient) { }

  get(medium: string) {
    const getOptions = {
      params: { medium }
    };
    return this.http.get<CardsResponse>('Cards', getOptions)
      .pipe(
        map((response: CardsResponse) => {
          return response.Cards;
        }),
        catchError(this.handleError)
      );
  }

  add(Card: Card) {
    return this.http.post('Cards', Card)
      .pipe(
        catchError(this.handleError)
      );
  }

  delete(Card: Card) {
    return this.http.delete(`Cards/${Card.id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error.message);
    return throwError('A data error occurred, please try again.');
  }
}

interface CardsResponse {
  Cards: Card[];
}

export interface Card {
  id: number;
  projectId: number;
  taskName: string;
  estimateTime: number;
  actualTime: number;
  referenceLink: string;
  taskDate: string;
  completedStatus: boolean;
}