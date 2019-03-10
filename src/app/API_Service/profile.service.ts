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

  getUserTechnicalActivityInfo():Observable<any>{
    return this.http.get(`${this.baseUrl}/userTechnicalActivity`);
  }

  getUserAddressInfo():Observable<any>{
    return this.http.get(`${this.baseUrl}/userAddress`);
  }

  getFacultyStaffList():Observable<any>{
    return this.http.get(`${this.baseUrl}/facultyData`);
  }
 }
