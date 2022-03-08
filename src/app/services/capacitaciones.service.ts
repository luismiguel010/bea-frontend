import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Capacitacion } from '../models/Capacitacion';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CapacitacionesService {

  constructor(protected http: HttpClient, private router: Router) { }

  getCapacitaciones(): Observable<any> {
    return this.http.get(environment.url_backend + 'capacitacion/getAll').pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }

  getCapacitacionById(idCapacitacion: string): Observable<Capacitacion> {
    return this.http.get<Capacitacion>(environment.url_backend + 'capacitacion/getById/' + idCapacitacion).pipe(
      catchError(e => {
        return throwError(e);
      })
    )
  }
}
