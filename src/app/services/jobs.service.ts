import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  public url_backend: string;

  constructor(protected http: HttpClient, private router: Router) {
  }

  getJobs(): Observable<any> {
    return this.http.get(environment.url_backend + 'job/getAll').pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }
}
