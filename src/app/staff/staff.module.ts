import { ComplaintsModule } from './complaints/complaints.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiscellaneousModule } from '../miscellaneous/miscellaneous.module';
import { StaffRoutingModule } from './staff-routing.module';
import { HomeComponent } from './home/home.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { StudentComponent } from './student/student/student.component';
import { DocumentsComponent } from './documents/documents.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ProfileComponent } from './profile/profile.component';
import { StaffComponent } from './staff/staff.component';
import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';
import { NavigationComponent } from './navigation/navigation.component';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';

@NgModule({
  imports: [
    CommonModule,
    StaffRoutingModule,
    MiscellaneousModule,
    ComplaintsModule,
    InfrastructureModule
  ],
  declarations: [
    HomeComponent,
    AttendanceComponent,
    StudentComponent,
    DocumentsComponent,
    AlertsComponent,
    ProfileComponent,
    StaffComponent,
    SidenavigationComponent,
    NavigationComponent
  ],
    providers: []
})
export class StaffModule { }
