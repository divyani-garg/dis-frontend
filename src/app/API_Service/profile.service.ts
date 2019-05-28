import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  
  private baseUrl="http://localhost:8080/dis/user";
  constructor(private http: HttpClient) { }
  getUserType(id):Observable<any>{
    return this.http.get('http://localhost:8080/dis/getUserType?id='+id);
  }
  getProfileInfo():Observable<any>{
    return this.http.get(`${this.baseUrl}/staffBasicProfile`);
  }

  getStudentProfileInfo():Observable<any>{
    return this.http.get(`${this.baseUrl}/studentBasicProfile`);
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
