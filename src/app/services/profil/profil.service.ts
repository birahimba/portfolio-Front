import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry} from 'rxjs/operators';
import { Profil } from './profil.model';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {

   }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  updateProfil(id, data): Observable<Profil>{
    return this.http.put<Profil>(this.baseUrl + '/Profil/'+id, JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1)
    )
  }
  
//Info sur les profiles
  listProfil(): Observable<Profil>{
    return this.http.get<Profil>(this.baseUrl + '/Profil/')
    .pipe(
      retry(1)
    )
  } 
}
