import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConventionalRoutingModule } from './conventional-routing.module';
import { TimetableComponent } from './timetable/timetable.component';
import { ProfileComponent } from './profile/profile.component';
import { ConventionalOutletComponent } from './conventional-outlet/conventional-outlet.component';

@NgModule({
  imports: [
    ConventionalRoutingModule,
    CommonModule
  ],
  declarations: [TimetableComponent, ProfileComponent, ConventionalOutletComponent],
  exports:[TimetableComponent, ProfileComponent]
})
export class ConventionalModule { }
