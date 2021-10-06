import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GLOBAL_IPS } from './global-ip';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  public url_backend: string;

  constructor(protected http: HttpClient, private router: Router) { 
    this.url_backend = GLOBAL_IPS.url_backend;
  }

  getJobs(): Observable<any>{
    return this.http.get(this.url_backend + 'job/getAll').pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }
}
