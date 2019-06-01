import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  
  private baseUrl="http://localhost:8080/dis/user";
  constructor(private http: HttpClient) { }
 
  getProfileInfo():Observable<any>{
    return this.http.get(`${this.baseUrl}/staffBasicProfile`);
  }

  getStudentProfileInfo():Observable<any>{
    return this.http.get("http://localhost:8080/dis/user/studentBasicProfile");
  }
  getWorkExperienceInfo():Observable<any>{
    return this.http.get(`${this.baseUrl}/userWorkExperience`);
  }

  getUserQualificationInfo():Observable<any>{
    return this.http.get(`${this.baseUrl}/userQualification`);
  }

  getUserResearchWorkInfo():Observable<any>{
    return this.http.get(`${this.baseUrl}/userResearchWork`);
  }

  getUserInternshipInfo():Observable<any>{
    return this.http.get(`${this.baseUrl}/userInternship`);
  }

  getUserProjectInfo():Observable<any>{
    return this.http.get(`${this.baseUrl}/userProject`);
  }

  getUserCompetitiveExamInfo():Observable<any>{
    return this.http.get(`${this.baseUrl}/userCompetitiveExams`);
  }

  getUserCulturalActivityInfo():Observable<any>{
    return this.http.get(`${this.baseUrl}/userCulturalActivityAchievements`);
  }

  getUserTechnicalActivityInfo(id:number):Observable<any>{
    return this.http.get('http://localhost:8080/dis/user/userTechnicalActivity?id='+id);
  }

  getUserAddressInfo():Observable<any>{
    return this.http.get(`${this.baseUrl}/userAddress`);
  }

  getFacultyStaffList():Observable<any>{
    return this.http.get(`${this.baseUrl}/facultyData`);
  }

  //add service
  editStaffProfile(info : any):Observable<any>{
    return this.http.put(`${this.baseUrl}/editStaffBasicProfile`,info,httpOptions);
  }
  editUserAddress(info : any):Observable<any>{
    return this.http.put(`${this.baseUrl}/editUserAddress`,info,httpOptions);
  }
 }
