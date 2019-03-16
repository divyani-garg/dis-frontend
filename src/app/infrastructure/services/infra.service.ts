import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Laboratory } from '../models/Laboratory';

@Injectable({
  providedIn: 'root'
})
export class InfraService {

  private baseUrl = 'http://localhost:8084/';

  constructor(private http: HttpClient) { }

  getLabs(): Observable<any> {
    return this.http.get(`${this.baseUrl}listInfrastructure?type=Laboratory`);
  }

  getOtherInfra(): Observable<any>{
    return this.http.get(`${this.baseUrl}listInfrastructure?type=other`)
  }

  getFacultyRooms(): Observable<any>{
    return this.http.get(`${this.baseUrl}getRooms`)
  }
}
