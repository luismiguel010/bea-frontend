import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const URL = '../../assets/data-images.json';

@Injectable({
  providedIn: 'root'
})
export class DataImagesService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(URL)
  }
}
