import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpsService {
  payload: any;

  constructor(private http: HttpClient) {}

  getDataPositionBetplay(): Observable<any> {
    return this.http.get('http://localhost:8080/api');
  }
}
