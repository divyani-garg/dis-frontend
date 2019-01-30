import { AlertsComponent } from './alerts/alerts.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffComponent } from './staff/staff.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ComplaintsComponent } from '../student/complaints/complaints.component';
import { DocumentsComponent } from './documents/documents.component';
import { LabsComponent } from './labs/labs.component';
import { ProfileComponent } from './profile/profile.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {
    path: 'staff',
    component: StaffComponent,
    children: [
        {
          path: '',
          component: HomeComponent
        },
        {
          path: 'staff_home',
          component: HomeComponent
        },
        {
          path: 'staff_about',
          component: AboutComponent
        },
        {
          path: 'staff_alerts',
          component: AlertsComponent
        },
        {
          path: 'staff_attendance',
          component: AttendanceComponent
        },
        {
          path: 'staff_complaints',
          component: ComplaintsComponent
        },
        {
          path: 'staff_documents',
          component: DocumentsComponent
        },
        {
          path: 'staff_labs',
          component: LabsComponent
        },
        {
          path: 'staff_profile',
          component: ProfileComponent
        },
        {
          path: 'staff_students',
          component: StudentsComponent
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
