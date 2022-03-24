import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map, Observable, catchError, throwError, tap, filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PokimonService {

  constructor(private http: HttpClient) { }

  
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  data: any;
  getData(request: string): Observable<any> {
    return this.http.get<any>(request)
  }
  putData(data: any): Observable<any> {
    return this.http.post<any>(`http://localhost:3000/comments`, data)
    .pipe(
      catchError(this.handleError)
    );
  }
  getComments(data: any): any {
    let comments: any[] = [];
     return this.http.get<any>(`http://localhost:3000/comments`).pipe(
      tap(elem => console.log('in tap',elem))
      ,map((e: any) => e.filter((elem: any) => elem.pokimon === data))
      ,tap(e => { comments = e})
      )
  }
}
