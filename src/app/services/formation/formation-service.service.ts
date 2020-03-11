import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formation } from './formation.model';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormationServiceService {

  baseUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }

  
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  updateFormation(id, data): Observable<Formation>{
    return this.http.put<Formation>(this.baseUrl + '/formation/'+id, JSON.stringify(data),this.httpOptions)
    .pipe(
      retry(1)
    )
  }

  listFormation():Observable<Formation>{
    return this.http.get<Formation>(this.baseUrl + '/formation/')
    .pipe(
      retry(1)
    )
  }
}
