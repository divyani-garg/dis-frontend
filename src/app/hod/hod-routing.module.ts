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
import { AboutModule } from '../about/about.module';
import { AboutComponent } from '../about/about/about.component';
import { HodInfrastuctureModule } from './hod-infrastucture/hod-infrastucture.module';
import { HodInfrastructureComponent } from './hod-infrastucture/hod-infrastructure/hod-infrastructure.component';
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
        path: 'hod_about',
        component: AboutComponent,
        loadChildren: () => AboutModule
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
        component: HodInfrastructureComponent,
        loadChildren: ()=> HodInfrastuctureModule
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HodRoutingModule { }
