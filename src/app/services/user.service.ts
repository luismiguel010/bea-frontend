import { User } from './../modals/hojas-de-vida-modal/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GLOBAL_IPS } from './global-ip';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url_backend: string;

  constructor(protected http: HttpClient, private router: Router) { 
    this.url_backend = GLOBAL_IPS.url_backend;
  }

  save_user(user: User): Observable<any>{
    return this.http.post(this.url_backend + 'user/save', user).pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }
}
