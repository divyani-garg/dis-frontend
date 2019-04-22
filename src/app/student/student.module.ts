import { TimetableComponent } from './timetable/timetable.component';
import { ConventionalModule } from './../conventional/conventional.module';
import { AboutRoutingModule } from './../about/about-routing.module';
import { AboutModule } from './../about/about.module';
import { CalendarComponent } from './../miscellaneous/calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { GradesComponent } from './grades/grades.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { StudentComponent } from './student/student.component';
import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { MiscellaneousModule } from '../miscellaneous/miscellaneous.module';
import { BarchartComponent } from '../miscellaneous/barchart/barchart.component';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { MatTableModule, MatPaginatorModule, MatButtonModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule,
    AboutModule,
    MatTableModule,
    AboutRoutingModule,
    MiscellaneousModule,
    ConventionalModule,
    InfrastructureModule,
    MatPaginatorModule,
    MatButtonModule
  ],
  declarations: [
    HomeComponent,
    NavigationComponent,
    GradesComponent,
    AlertsComponent,
    AssignmentsComponent,
    ComplaintsComponent,
    StudentComponent,
    AttendanceComponent,
    SidenavigationComponent,
    TimetableComponent
  ],
  providers: [BarchartComponent],
  exports: [NavigationComponent]
})
export class StudentModule { }
