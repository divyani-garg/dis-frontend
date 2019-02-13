import { AboutRoutingModule } from './../about/about-routing.module';
import { AboutModule } from './../about/about.module';
// import { CalendarComponent } from './../miscellaneous/calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { GradesComponent } from './grades/grades.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { ProfileComponent } from './profile/profile.component';
import { StudentComponent } from './student/student.component';
import { TimetableComponent } from './timetable/timetable.component';
import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { MiscellaneousModule } from '../miscellaneous/miscellaneous.module';
import { HodInfrastuctureModule } from '../hod/hod-infrastucture/hod-infrastucture.module';
import { BarchartComponent } from '../miscellaneous/barchart/barchart.component';


@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule,
    AboutModule,
    AboutRoutingModule,
    MiscellaneousModule,
    HodInfrastuctureModule
  ],
  declarations: [
    HomeComponent,
    NavigationComponent,
    GradesComponent,
    AlertsComponent,
    AssignmentsComponent,
    ComplaintsComponent,
    ProfileComponent,
    StudentComponent,
    AttendanceComponent,
    TimetableComponent,
    SidenavigationComponent,
    // CalendarComponent
  ],
  providers: [BarchartComponent],
  exports: [NavigationComponent]
})
export class StudentModule { }
