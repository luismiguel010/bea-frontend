import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Cv } from '../models/cv';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CvService {

  public url_backend: string;

  constructor(protected http: HttpClient, private router: Router) {
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('username:password'));
  }

  save_cv(cv: Cv, file: File): Observable<any> {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    let formdata: FormData = new FormData();
    const fileData = new Blob([file], { type: "multipart/form-data" })
    formdata.append('file', fileData);
    const cvJson = new Blob([JSON.stringify(cv)], { type: "application/json" });
    formdata.append('cv', cvJson);

    return this.http.post(environment.url_backend + 'cv/save', formdata, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }
}
