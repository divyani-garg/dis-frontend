import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HodComponent } from './hod/hod.component';
import { HomeComponent } from './home/home.component';
import { AdministrationComponent } from './administration/administration.component';
import { FacultyComponent } from './faculty/faculty.component';
import { RequestsComponent } from './requests/requests.component';
import { TimetableComponent } from './timetable/timetable.component';
import { AlertsComponent } from './alerts/alerts.component';
import { StudentComponent } from './student/student.component';
import { DocumentsComponent } from './documents/documents.component';
import { InfrastructureComponent } from './hod-infrastucture/infrastructure/infrastructure.component';
import { ToDoComponent } from './to-do/to-do.component';
import { ProfileComponent } from './profile/profile.component';
import { MeetingsComponent } from './meetings/meetings.component';
const routes: Routes = [
  { path: 'hod',
    component: HodComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'student',
        component: StudentComponent
      },
      {
        path: 'documents',
        component: DocumentsComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'to-do',
        component: ToDoComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'hod_tasks',
        component: AdministrationComponent
      },
      {
        path: 'faculty',
        component: FacultyComponent
      },
      {
        path: 'infrastructure',
        component: InfrastructureComponent
      },
      {
        path: 'requests',
        component: RequestsComponent
      },
      {
        path: 'timetable',
        component: TimetableComponent
      },
      {
        path: 'alerts',
        component: AlertsComponent
      },
      {
        path: 'meetings',
        component: MeetingsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HodRoutingModule { }
