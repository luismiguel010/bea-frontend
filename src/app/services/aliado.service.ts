import { environment } from './../../environments/environment';
import { Aliado } from './../models/aliado';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AliadoService {

  public url_backend: string;

  constructor(protected http: HttpClient, private router: Router) {
  }

  getAllAliado(): Observable<any> {
    return this.http.get(environment.url_backend + 'aliado/getAll').pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }




}
