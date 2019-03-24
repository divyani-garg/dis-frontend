import { AuthenticationModule } from './authentication/authentication.module';
import { AuthInterceptor, httpInterceptorProviders } from './authentication/auth-interceptor';
import { StaffModule } from './staff/staff.module';
import { StaffRoutingModule } from './staff/staff-routing.module';
import { StudentRoutingModule } from './student/student-routing.module';
import { StudentModule } from './student/student.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacultyModule } from './faculty/faculty.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { HodRoutingModule } from './hod/hod-routing.module';
import { HodModule } from './hod/hod.module';
import { ToastrModule } from 'ng6-toastr-notifications';

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    AuthenticationModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StudentModule,
    FormsModule,
    HttpClientModule,
    StudentRoutingModule,
    HodRoutingModule,
    HodModule,
    FacultyModule,
    StaffModule,
    MiscellaneousModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthInterceptor,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
