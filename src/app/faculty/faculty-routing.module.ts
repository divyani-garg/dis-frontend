import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyComponent } from './faculty/faculty.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentRoutingModule } from './student/student-routing.module';
import { ComplaintsRoutingModule } from './complaints/complaints-routing.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { DocumentsComponent } from './documents/documents.component';
import { AboutComponent } from '../about/about/about.component';
import { AboutModule } from '../about/about.module';
import { ProfileComponent } from '../conventional/profile/profile.component';
import { ConventionalModule } from '../conventional/conventional.module';
import { MydutiesModule } from '../myduties/myduties.module';
import { MydutiesComponent } from '../myduties/myduties/myduties.component';
import { HomeComponent } from './home/home/home.component';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { InfrastructureOutletComponent } from '../infrastructure/infrastructure-outlet/infrastructure-outlet.component';

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
        path: 'infrastructure',
        component: InfrastructureOutletComponent,
        loadChildren: () => InfrastructureModule
      },
      {
        path : 'attendance',
        component: AttendanceComponent
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
        path : 'profile',
        loadChildren: () => ConventionalModule 
      },
      {
        path: 'my_duties',
        component: MydutiesComponent,
        loadChildren:()=> MydutiesModule
      },
      {
        path : '**',
        component : PageNotFoundComponent
      },
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HomeRoutingModule, StudentRoutingModule,
    ComplaintsRoutingModule],
  exports: [RouterModule]
})
export class FacultyRoutingModule { }
