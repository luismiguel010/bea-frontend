import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DownloadFormatoService {

  constructor(private http: HttpClient) { }

  download(): Observable<Blob> {
    return this.http.get(environment.url_backend + 'blob/download/formato', {
      responseType: 'blob'
    }).pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }
}
