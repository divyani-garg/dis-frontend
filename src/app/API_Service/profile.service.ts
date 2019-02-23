import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  
  private baseUrl="http://localhost:8081";
  constructor(private http: HttpClient) { }
  getProfileInfo():Observable<any>{
    return this.http.get(`${this.baseUrl}/staffBasicProfile`);
  }
}
