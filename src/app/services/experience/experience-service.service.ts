import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Experience } from './experience.model';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExperienceServiceService {

  baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {

   }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
 
//Info sur les profiles
  listExperience(): Observable<Experience>{
    return this.http.get<Experience>(this.baseUrl + '/experience/')
    .pipe(
      retry(1)
    )
  } 
}
