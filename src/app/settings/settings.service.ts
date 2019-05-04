import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ContactResponse, Payload } from '../interface';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    // Authorization: 'my-auth-token'
  })
};

export interface Response {
  status: boolean;
  data: ContactResponse;
}

@Injectable({
  providedIn: 'root',
})

export class DashboardService {
  constructor(private http: HttpClient) { }

  getContactAndFieldUrl = 'https://apistaging.myhub.vn/api/UserProfiles/getContactAndField';

  contactAndFields: ContactResponse;

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

  getContactAndFields(payload: Payload): Observable<Response> {
    return this.http.post<Response>(this.getContactAndFieldUrl, payload, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
}
