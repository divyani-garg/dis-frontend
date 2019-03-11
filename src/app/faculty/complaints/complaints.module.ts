import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplaintsRoutingModule } from './complaints-routing.module';
import { TotalComplaintsComponent } from './total-complaints/total-complaints.component';
import { ResolvedComplaintsComponent } from './resolved-complaints/resolved-complaints.component';
import { RemainingComplaintsComponent } from './remaining-complaints/remaining-complaints.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { AddacomplaintComponent } from './addacomplaint/addacomplaint.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

@NgModule({
  declarations: [TotalComplaintsComponent, ResolvedComplaintsComponent, RemainingComplaintsComponent,
    SideNavigationComponent, ComplaintsComponent, AddacomplaintComponent],

  imports: [
    CommonModule,
    ComplaintsRoutingModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'primary' // set defaults here
    })


  ],
  bootstrap:[RemainingComplaintsComponent]
  })
export class ComplaintsModule { }
