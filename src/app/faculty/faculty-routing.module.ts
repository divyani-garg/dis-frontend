import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyComponent } from './faculty/faculty.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AlertsComponent } from './alerts/alerts.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutRoutingModule } from './about/about-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentRoutingModule } from './student/student-routing.module';
import { ComplaintsRoutingModule } from './complaints/complaints-routing.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { HomeComponent } from './home/home/home.component';
import { MydutiesComponent } from './myduties/myduties/myduties.component';
import { MydutiesRoutingModule } from './myduties/myduties-routing.module';
import { DocumentsComponent } from './documents/documents.component';

const routes: Routes = [
  {
    path : 'faculty',
    component : FacultyComponent,
    children : [
      {
        path : '',
        component : HomeComponent
      },
      {
        path : 'my_duties',
        component : MydutiesComponent
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
        path : '**',
        component : PageNotFoundComponent

      },
      
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),AboutRoutingModule,HomeRoutingModule,StudentRoutingModule,
    ComplaintsRoutingModule,MydutiesRoutingModule],
  exports: [RouterModule]
})
export class FacultyRoutingModule { }
