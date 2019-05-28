import { LeaveForm } from './leaveform';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentAttendanceService {

  url = 'http://localhost:8080/dis/user'

  constructor(private http: HttpClient ) { }

  getAttendancePercentage(): Observable<any> {
    return this.http.get(`${this.url}/studentAttendancePercentage`);
  }

  getSubjectwiseAttendance(subjectCode): Observable<any> {
    return this.http.get(`${this.url}/studentAttendance/${subjectCode}`);
  }

  getLeaveRecord(): Observable<any> {
    return this.http.get(`${this.url}/studentLeaveAccount`);
  }

  applyForLeave(application: LeaveForm): Observable<any> {
    return this.http.post<string>(`${this.url}/studentLeaveApplication`, application,{ observe: 'response' });
  }
}
