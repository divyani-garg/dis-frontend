import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/dis/user'

  constructor(private http: HttpClient) { }

  getFacultyDetails(): Observable<any> {
    return this.http.get(`${this.baseUrl}/facultyData`);
  }

  getStaffDetails(): Observable<any> {
    return this.http.get(`${this.baseUrl}/staffData`);
  }
}
