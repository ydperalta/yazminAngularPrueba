import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get<T>(endPoint: string): Observable<T> {
    return this.http.get<T>(`${environment.urlServices}${endPoint}`)
      .pipe(catchError(this.handleError));
  }

  post<T>(endPoint:any, item: T, header: any = null): Observable<object> {
    const headers = header ? header : {};
    return this.http.post(`${environment.urlServices}${endPoint}`, item, headers)
      .pipe(catchError(this.handleError));
  }

  put<T>(endPoint:any, item: T): Observable<object> {
    return this.http.put(`${environment.urlServices}${endPoint}`, item)
      .pipe(catchError(this.handleError));
  }

  delete<T>(endPoint: string, id:any): Observable<T> {
    let url = `${environment.urlServices}${endPoint}`;
    url += id ? `/${id}` : '';
    return this.http.delete<T>(url).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    return throwError(error);
  }
}
