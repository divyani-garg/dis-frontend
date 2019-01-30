import { NavigationComponent } from './navigation/navigation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRollListRoutingModule } from './student-roll-list-routing.module';
import { StudentRollListComponent } from './student-roll-list/student-roll-list.component';

@NgModule({
  imports: [
    CommonModule,
    StudentRollListRoutingModule
  ],
  declarations: [StudentRollListComponent,NavigationComponent],
  exports:[NavigationComponent]
})
export class StudentRollListModule { }
