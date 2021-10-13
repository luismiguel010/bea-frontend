import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url_backend: string;

  constructor(protected http: HttpClient, private router: Router) {
  }

  save_user(user: User): Observable<User> {
    return this.http.post<User>(environment.url_backend + 'user/save', user).pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }

  get_user_by_id(id: string): Observable<User> {
    return this.http.get<User>(environment.url_backend + 'user/getById/' + id).pipe(
      catchError(e => {
        return throwError(e);
      })
    )
  }
}
