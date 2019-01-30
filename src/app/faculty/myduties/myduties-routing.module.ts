import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyComponent } from '../faculty/faculty.component';
import { MydutiesComponent } from './myduties/myduties.component';
import { ExpertlectureComponent } from './expertlecture/expertlecture.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path : 'faculty',
    component : FacultyComponent,
    children : [
      {
        path : '',
        component : MydutiesComponent
      },
      {
        path  : 'my_duties',
        component : MydutiesComponent
      },
      {
        path : 'expertlecture',
        component : ExpertlectureComponent
      },
      {
        path :'profile',
        component : ProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MydutiesRoutingModule { }
