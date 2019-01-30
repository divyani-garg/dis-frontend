import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarchartComponent } from './barchart/barchart.component';
import { CalendarComponent } from './calendar/calendar.component';
import { PiechartComponent } from './piechart/piechart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BarchartComponent, CalendarComponent, PiechartComponent],
  exports:[CalendarComponent, BarchartComponent, PiechartComponent]
})
export class MiscellaneousModule { }
