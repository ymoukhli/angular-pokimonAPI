import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PokimonService {

  constructor(private http: HttpClient) { }

  getData(request: string): Observable<any> {
    return this.http.get<any>(request)
  }
}
