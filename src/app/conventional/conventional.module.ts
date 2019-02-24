import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConventionalRoutingModule } from './conventional-routing.module';
import { TimetableComponent } from './timetable/timetable.component';

@NgModule({
  imports: [
    CommonModule,
    ConventionalRoutingModule
  ],
  declarations: [TimetableComponent],
  exports:[TimetableComponent]
})
export class ConventionalModule { }
