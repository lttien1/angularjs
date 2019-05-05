import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Payload, Field } from '../interface';
import { catchError } from 'rxjs/operators';
import SettingConstants from './settings.constants';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

export interface Response {
  status: boolean;
  data: any;
}

@Injectable({
  providedIn: 'root',
})

export class SettingService {
  constructor(private http: HttpClient) { }

  contactFields: Array<Field>;

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

  getContactFields(payload: Payload): Observable<Response> {
    return this.http.post<Response>(SettingConstants.API_GET_CONTACT_FIELDS, payload, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
}
