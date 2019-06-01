import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Laboratory } from '../models/Laboratory';
import { AddInfrastructure } from '../models/AddInfrastructure';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/abstract_emitter';

@Injectable({
  providedIn: 'root'
})
export class InfraService {

  private baseUrl = 'http://localhost:8080/dis/infrastructure/';
  lab: Laboratory;

  constructor(private http: HttpClient) { }

  getLabs(): Observable<any> {
    return this.http.get(`${this.baseUrl}listInfrastructure?type=laboratory`);
  }

  getOtherInfra(): Observable<any>{
    return this.http.get(`${this.baseUrl}listInfrastructure?type=other`);
  }

  getClassrooms(): Observable<any>{
    return this.http.get(`${this.baseUrl}listInfrastructure?type=classroom`);
  }

  getFacultyRooms(): Observable<any>{
    return this.http.get(`${this.baseUrl}getRooms`)
  }

  setInfraName(lab: Laboratory): void{
    console.log(lab);
    this.lab = lab;
  }

  getInfraName(): Laboratory{
    return this.lab;
  }

  addInfrastructure (addInfra: AddInfrastructure): Observable<AddInfrastructure> {
    return this.http.post<AddInfrastructure>(`${this.baseUrl}addInfrastructure`, addInfra)
  }

}
