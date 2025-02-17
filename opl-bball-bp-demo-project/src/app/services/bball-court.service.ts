import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BballCourtService {
  private apiUrl = 'http://localhost:3000/courts';

  constructor(private http: HttpClient) { }

  getCourts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
