import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RemainingComplaintsComponent } from './remaining-complaints/remaining-complaints.component';
import { TotalComplaintsComponent } from './total-complaints/total-complaints.component';
import { ResolvedComplaintsComponent } from './resolved-complaints/resolved-complaints.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { MyComplaintsComponent } from './my-complaints/my-complaints.component';

const routes: Routes = [
  {
            path : '',
            component : SideNavigationComponent,
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
                path : 'mycomplaints',
                component : MyComplaintsComponent
              }
            
            ]
          }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplaintsRoutingModule { }
