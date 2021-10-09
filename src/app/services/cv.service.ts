import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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
    return this.http.post(this.url_backend + 'cv/save', {cv, file}).pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }
}
