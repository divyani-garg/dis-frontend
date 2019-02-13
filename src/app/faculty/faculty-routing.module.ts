import { HomeComponent } from './../staff/home/home.component';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyComponent } from './faculty/faculty.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AlertsComponent } from './alerts/alerts.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentRoutingModule } from './student/student-routing.module';
import { ComplaintsRoutingModule } from './complaints/complaints-routing.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { MydutiesComponent } from './myduties/myduties/myduties.component';
import { MydutiesRoutingModule } from './myduties/myduties-routing.module';
import { DocumentsComponent } from './documents/documents.component';
import { AboutComponent } from '../about/about/about.component';
import { AboutModule } from '../about/about.module';
import { FacultyProfileComponent } from './faculty-profile/faculty-profile.component';
import { InfrastructureComponent } from '../hod/hod-infrastucture/infrastructure/infrastructure.component';
import { HodInfrastuctureModule } from '../hod/hod-infrastucture/hod-infrastucture.module';

const routes: Routes = [
  {
    path : 'faculty',
    component : FacultyComponent,
    children : [
      {
        path: 'about',
        component: AboutComponent,
        loadChildren: () => AboutModule
      },
      {
        path : 'my_duties',
        component : MydutiesComponent
      },
      {
        path: 'infrastructure',
        component: InfrastructureComponent,
        loadChildren: () => HodInfrastuctureModule
      },
      {
        path : 'attendance',
        component: AttendanceComponent
      },
      {
        path : 'alerts',
        component : AlertsComponent
      },
      {
        path : 'navigation',
        component : NavigationComponent
      },
      {
        path : 'documents',
        component : DocumentsComponent
      },
      {
        path: 'faculty_profile',
        component : FacultyProfileComponent
      },
      {
        path : '**',
        component : PageNotFoundComponent
      }
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HomeRoutingModule, StudentRoutingModule,
    ComplaintsRoutingModule, MydutiesRoutingModule],
  exports: [RouterModule]
})
export class FacultyRoutingModule { }
