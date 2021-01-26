import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private _http:HttpClient) { }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occured', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status} body was ${error.error}`);
    }
    return throwError('Something bad happend, please try again later');
  }
  private extractData(res: Response): Array<any> | {} {
    const body = res;
    return body || {};
  }
  public apiUrl = 'http://15.207.44.182:3000/api/master/testAPI';

  getTestAPI(): Observable<any> {
    return this._http.get(this.apiUrl).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
}
