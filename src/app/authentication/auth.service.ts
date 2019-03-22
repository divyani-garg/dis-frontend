import { AuthInterceptor } from './auth-interceptor';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router'

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
  private resetUrl = 'http://localhost:8080/dis/processResetPassword';

  constructor(private http: HttpClient, private interceptor: AuthInterceptor, private route: ActivatedRoute) {
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

  resetPassword(newPassword): Observable<string> {
    const reset_token = this.route.snapshot.queryParams['resetToken'];
    console.log(reset_token);
    var info = {resetToken: reset_token, password: newPassword}
    console.log(info);
    return this.http.post<string>(this.resetUrl,info, httpOptions);

  }
}
