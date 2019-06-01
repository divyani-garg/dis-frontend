import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideNavigationService {

  private baseUrl = 'localhost:8080/dis/user/';
  constructor(private http: HttpClient) {}
  
  getSideNavigation(): any {
    return this.http.get(`${this.baseUrl}getSideNavigation`);
  }

}
