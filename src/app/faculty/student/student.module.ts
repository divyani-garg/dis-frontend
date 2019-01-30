import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentFourthYearProjectComponent } from './student-fourth-year-project/student-fourth-year-project.component';
import { MeProjectDetailsComponent } from './me-project-details/me-project-details.component';
import { MeSchlorshipDetailsComponent } from './me-schlorship-details/me-schlorship-details.component';
import { StudentComponent } from './student/student.component';
import { StudentRollListModule } from './student-roll-list/student-roll-list.module';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule,
    StudentRollListModule
  ],
  declarations: [StudentFourthYearProjectComponent, MeProjectDetailsComponent, MeSchlorshipDetailsComponent, StudentComponent]
})
export class StudentModule { }
