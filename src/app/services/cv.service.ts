import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GLOBAL_IPS } from './global-ip';
import { Router } from '@angular/router';
import { Cv } from '../models/cv';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  public url_backend: string;

  constructor(protected http: HttpClient, private router: Router) { 
    this.url_backend = GLOBAL_IPS.url_backend;
  }

  save_cv(cv: Cv, file: File): Observable<any>{
    let formdata: FormData = new FormData();
    const fileData = new Blob([file], {type: "multipart/form-data"})
    formdata.append('file', fileData);
    const cvJson = new Blob([JSON.stringify(cv)],{ type: "application/json"});
    formdata.append('cv', cvJson);

    return this.http.post(this.url_backend + 'cv/save', formdata, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }
}
