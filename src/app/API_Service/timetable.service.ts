import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {

  private baseUrl = 'http://localhost:8082';

  constructor(private http: HttpClient) { }

  getTimetable(): Observable<any> {
    return this.http.get(`${this.baseUrl}/timetable/student`);
  }
}
