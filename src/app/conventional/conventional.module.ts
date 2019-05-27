import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConventionalRoutingModule } from './conventional-routing.module';
import { TimetableComponent } from './timetable/timetable.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ConventionalRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ProfileComponent,TimetableComponent],
  exports:[ProfileComponent,TimetableComponent]
  
  
})
export class ConventionalModule { }
