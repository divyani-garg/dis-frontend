import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { AddACleanlinessComplaint } from '../complaints/complaints_cleanliness';
import { AddOtherComplaint } from '../complaints/complaints_other';
import { AuthInterceptor } from '../authentication/auth-interceptor';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ComplaintsService {

  private baseUrl="http://localhost:8083";
  private postUrl="http://localhost:8080/dis/administration/addCleanlinessComplaint";
  constructor(private http: HttpClient,private interceptor: AuthInterceptor) { }

  getRemainingCleanlinessComplaint():Observable<any>{
    return this.http.get(`${this.baseUrl}/getRemainingCleanlinessComplaints`);
  }

  getRemainingLEComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getRemainingLEComplaints`);
  }

  getRemainingCWNComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getRemainingCWNComplaints`);
  }

  getRemainingECCWComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getRemainingECCWComplaints`);
  }

  getRemainingOtherComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getRemainingOtherComplaints`);
  }

  getRemainingFacultyComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getRemainingFacultyComplaints`);
  }

  getRemainingStudentComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getRemainingStudentComplaints`);
  }

  getRemainingEMRSComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getRemainingEMRSComplaints`);
  }

  getRemainingTelephoneComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getRemainingTelephoneComplaints`);
  }

  //Resolved Complaints
  getResolvedCleanlinessComplaint():Observable<any>{
    return this.http.get(`${this.baseUrl}/getResolvedCleanlinessComplaints`);
  }

  getResolvedLEComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getResolvedLEComplaints`);
  }

  getResolvedCWNComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getResolvedCWNComplaints`);
  }

  getResolvedECCWComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getResolvedECCWComplaints`);
  }

  getResolvedOtherComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getResolvedOtherComplaints`);
  }

  getResolvedFacultyComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getResolvedFacultyComplaints`);
  }

  getResolvedStudentComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getResolvedStudentComplaints`);
  }

  getResolvedEMRSComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getResolvedEMRSComplaints`);
  }

  getResolvedTelephoneComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getResolvedTelephoneComplaints`);
  }


  //Total Complaints
  getTotalCleanlinessComplaint():Observable<any>{
    return this.http.get(`${this.baseUrl}/getTotalCleanlinessComplaints`);
  }

  getTotalLEComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getTotalLEComplaints`);
  }

  getTotalCWNComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getTotalCWNComplaints`);
  }

  getTotalECCWComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getTotalECCWComplaints`);
  }

  getTotalOtherComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getTotalOtherComplaints`);
  }

  getTotalFacultyComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getTotalFacultyComplaints`);
  }

  getTotalStudentComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getTotalStudentComplaints`);
  }

  getTotalEMRSComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getTotalEMRSComplaints`);
  }

  getTotalTelephoneComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getTotalTelephoneComplaints`);
  }


  //My Complaints
  getMyCleanlinessComplaint():Observable<any>{
    return this.http.get(`${this.baseUrl}/getMyCleanlinessComplaints`);
  }

  getMyLEComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getMyLEComplaints`);
  }

 
  getMyOtherComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getMyOtherComplaints`);
  }

  getMyFacultyComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getMyFacultyComplaints`);
  }

  getMyStudentComplaints():Observable<any>{
    return this.http.get(`${this.baseUrl}/getMyStudentComplaints`);
  }

  addACleanlinessComplaint(info : AddACleanlinessComplaint):Observable<HttpResponse<string>>{
    return this.http.post<string>("http://localhost:8080/dis/administration/addCleanlinessComplaint",info,{observe: 'response'});
  }
  // addOtherComplaint(info : AddOtherComplaint):Observable<any>{
  //   return this.http.post("http://localhost:8080/dis/administration/addOtherComplaint",info,httpOptions);
  // }
  addOtherComplaint (info : AddOtherComplaint): Observable<AddOtherComplaint> {
    return this.http.post<AddOtherComplaint>('http://localhost:8080/dis/administration/addOtherComplaint', info, httpOptions)
  }
  //get complaints counts
  getRemainingComplaintCount():Observable<any>{
    return this.http.get(`${this.baseUrl}/getRemainingComplaintsCount`);
  }
  getResolvedComplaintCount():Observable<any>{
    return this.http.get(`${this.baseUrl}/getResolvedComplaintsCount`);
  }
  getTotalComplaintCount():Observable<any>{
    return this.http.get(`${this.baseUrl}/getTotalComplaintsCount`);
  }
  getMyComplaintCount():Observable<any>{
    return this.http.get(`${this.baseUrl}/getMyComplaintsCount`);
  }
}
