import { AuthInterceptor } from './auth-interceptor';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn: 'root'})
export class AuthService {

  private loginUrl = 'http://localhost:8080/dis/signin';
  private signupUrl = 'http://localhost:8080/dis/signup';
  private validateUrl = 'http://localhost:8080/dis/getUserType';
  private forgetPasswordUrl = 'localhost:8080/dis/forgotPassword';

  constructor(private http: HttpClient, private interceptor: AuthInterceptor) {
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }

  validateUser(): Observable<string> {
    return this.http.get(this.validateUrl, { responseType: 'text' });
  }

  forgetPassword(email: string): Observable<string> {
    console.log('Here');
    console.log(email);
    const indata = {'email': email};
    return this.http.post<string>(this.forgetPasswordUrl, indata, httpOptions);
  }
}
