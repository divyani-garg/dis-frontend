import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentTimetableService {

  private baseUrl = 'http://localhost:8080/dis/academics';

  constructor(private http: HttpClient) { }

  getTimetable(): Observable<any> {
    return this.http.get(`${this.baseUrl}/timetable/student`);
  }

}
