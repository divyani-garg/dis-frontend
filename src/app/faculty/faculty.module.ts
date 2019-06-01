import { PiechartComponent } from './../miscellaneous/piechart/piechart.component';
import { AboutModule } from './../about/about.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultyRoutingModule } from './faculty-routing.module';
import { AttendanceComponent } from './attendance/attendance.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FacultyComponent } from './faculty/faculty.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentRoutingModule } from './student/student-routing.module';
import { StudentModule } from '../faculty/student/student.module';
import { HomeModule } from './home/home.module';
import { DocumentsComponent } from './documents/documents.component';
import { MiscellaneousModule } from 'src/app/miscellaneous/miscellaneous.module';
import { ConventionalModule } from '../conventional/conventional.module';
import { MydutiesModule } from './../myduties/myduties.module';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { ComplaintsModule } from '../complaints/complaints.module';

@NgModule({
  imports: [
    CommonModule,
    FacultyRoutingModule,
    StudentRoutingModule,
    StudentModule,
    HomeModule,
    MiscellaneousModule,
    AboutModule,
    InfrastructureModule,
    ConventionalModule,
    MydutiesModule,
    ComplaintsModule
   ],
  declarations: [AttendanceComponent, NavigationComponent,
    FacultyComponent, PageNotFoundComponent, DocumentsComponent    ],
  providers: [PiechartComponent]
})
export class FacultyModule { }
