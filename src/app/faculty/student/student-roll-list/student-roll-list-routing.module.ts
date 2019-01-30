import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyComponent } from '../../faculty/faculty.component';
import { StudentComponent } from '../student/student.component';
import { StudentRollListComponent } from './student-roll-list/student-roll-list.component';

const routes: Routes = [
 { path : 'faculty',
  component : FacultyComponent,
  children : [
    {
      path :'student',
      component : StudentComponent,
      children:[
        {
          path : '',
          component : StudentRollListComponent
        },
        {
          path : 'student_roll_list',
          component : StudentRollListComponent
        }
      ]
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRollListRoutingModule { }
