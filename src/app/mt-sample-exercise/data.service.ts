import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Farm } from './farm';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = './mock-data.json';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }
}
