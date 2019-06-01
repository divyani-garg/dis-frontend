import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacultyDataService {
  private baseUrl='http://localhost:8080/dis/user/'

  constructor(private http: HttpClient) 
  { }

  getFacultyData():Observable<any>{
    return this.http.get(`${this.baseUrl}facultyData`);
  }

  getStaffData():Observable<any>{
    return this.http.get(`${this.baseUrl}staffData`);
  }

}
