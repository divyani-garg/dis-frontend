import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { OverviewComponent } from './overview/overview.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { LibraryComponent } from './library/library.component';
import { MagazineComponent } from './magazine/magazine.component';
import { LabsComponent } from './labs/labs.component';
import { FacultiesComponent } from './faculties/faculties.component';
import { StaffComponent } from './staff/staff.component';
import { ComputerClubComponent } from './computer-club/computer-club.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FacultyComponent } from '../faculty/faculty.component';

const routes: Routes = [
  {
    path : 'faculty',         //we have to give faculty as parent because it will not be able to search about
    component : FacultyComponent,
    children : [
  {
    path : 'about',
    component : AboutComponent,
    children : [
      {
        path : '',
        component : OverviewComponent
      },
      {
        path : 'overview',
        component : OverviewComponent
      },
      {
        path : 'classroom',
        component : ClassroomComponent
      },
      {
        path : 'library',
        component : LibraryComponent
      },
      { 
        path : 'magazine',
        component :MagazineComponent
      },
      {
        path : 'labs',
        component : LabsComponent
      },
      {
        path : 'faculties',
        component : FacultiesComponent
      },
      {
        path :'staff',
        component : StaffComponent
      },
      {
        path : 'computer_club',
        component : ComputerClubComponent
      },{
        path : 'navigation',
        component : NavigationComponent
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
export class AboutRoutingModule { }
