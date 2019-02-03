import { StaffModule } from './staff/staff.module';
import { StaffRoutingModule } from './staff/staff-routing.module';
import { StudentRoutingModule } from './student/student-routing.module';
import { StudentModule } from './student/student.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacultyModule } from './faculty/faculty.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { HodRoutingModule } from './hod/hod-routing.module';
import { HodModule } from './hod/hod.module';



import { LoginComponent } from './authentication/login/login.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule,
    FormsModule,
    HttpClientModule,
    StudentRoutingModule,
    HodRoutingModule,
    HodModule,
    FacultyModule,
    StaffModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
