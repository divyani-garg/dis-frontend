import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyComponent } from '../faculty/faculty.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { RemainingComplaintsComponent } from './remaining-complaints/remaining-complaints.component';
import { TotalComplaintsComponent } from './total-complaints/total-complaints.component';
import { ResolvedComplaintsComponent } from './resolved-complaints/resolved-complaints.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';

const routes: Routes = [
  {
    path : 'faculty',
    component : FacultyComponent,
    children  : [
      {
        path : 'complaints',
        component : ComplaintsComponent,
        children : [
          {
            path : '',
            component : RemainingComplaintsComponent
          },
          {
            path : 'remaining_complaints',
            component : RemainingComplaintsComponent
          },
          {
            path  : 'total_complaints',
            component : TotalComplaintsComponent
          },
          {
            path : 'resolved_complaints',
            component : ResolvedComplaintsComponent
          },
          {
            path : 'side_navigation',
            component : SideNavigationComponent
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
export class ComplaintsRoutingModule { }
