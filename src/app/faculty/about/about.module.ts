import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { LabsComponent } from './labs/labs.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { MagazineComponent } from './magazine/magazine.component';
import { ComputerClubComponent } from './computer-club/computer-club.component';
import { LibraryComponent } from './library/library.component';
import { FacultiesComponent } from './faculties/faculties.component';
import { StaffComponent } from './staff/staff.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  declarations: [OverviewComponent, LabsComponent, ClassroomComponent, MagazineComponent, ComputerClubComponent, LibraryComponent, FacultiesComponent, StaffComponent, NavigationComponent, AboutComponent]
})
export class AboutModule { }
