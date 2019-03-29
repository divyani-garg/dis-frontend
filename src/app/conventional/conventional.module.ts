import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConventionalRoutingModule } from './conventional-routing.module';
import { TimetableComponent } from './timetable/timetable.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    ConventionalRoutingModule
  ],
  declarations: [ProfileComponent,TimetableComponent],
  exports:[ProfileComponent,TimetableComponent]
  
  
})
export class ConventionalModule { }
