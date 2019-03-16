import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffDataService {
    private baseUrl='http://localhost:8081/staffData'

  constructor(private http: HttpClient) { }
  getStaffData():Observable<any>{
    return this.http.get(`${this.baseUrl}staffData`);
  }
}
