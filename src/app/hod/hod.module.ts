import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HodRoutingModule } from './hod-routing.module';
import { HomeComponent } from './home/home.component';
import { AdministrationComponent } from './administration/administration.component';
import { TimetableComponent } from './timetable/timetable.component';
import { FacultyComponent } from './faculty/faculty.component';
import { RequestsComponent } from './requests/requests.component';
import { AlertsComponent } from './alerts/alerts.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HodComponent } from './hod/hod.component';
import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';
import { StudentComponent } from './student/student.component';
import { DocumentsComponent } from './documents/documents.component';
import { HodInfrastuctureModule } from './hod-infrastucture/hod-infrastucture.module';
import { MiscellaneousModule } from '../miscellaneous/miscellaneous.module';
import { ToDoComponent } from './to-do/to-do.component';
import { ProfileComponent } from './profile/profile.component';
import { CalendarComponent } from '../miscellaneous/calendar/calendar.component';
import { FooterModule } from './footer/footer.module';
import { MeetingsComponent } from './meetings/meetings.component';

@NgModule({
  imports: [
    CommonModule,
    HodRoutingModule,
    HodInfrastuctureModule,
    MiscellaneousModule,
    FooterModule
  ],
  declarations: [
     HomeComponent,
     AdministrationComponent, 
     TimetableComponent, 
     FacultyComponent, 
     RequestsComponent, 
     AlertsComponent, 
     NavigationComponent, 
     HodComponent, 
     SidenavigationComponent,
     
     StudentComponent,
     DocumentsComponent,
     ToDoComponent,
     ProfileComponent,
     MeetingsComponent],
     providers: [CalendarComponent],
     exports:[
       NavigationComponent
     ]
 
})
export class HodModule { }
