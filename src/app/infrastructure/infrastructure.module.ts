import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfrastructureRoutingModule } from './infrastructure-routing.module';
import { CentralInventoryComponent } from './central-inventory/central-inventory.component';
import { InfrastructureOutletComponent } from './infrastructure-outlet/infrastructure-outlet.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { InfrastuctureTimetableComponent } from './infrastucture-timetable/infrastucture-timetable.component';

@NgModule({
  imports: [
    CommonModule,
    InfrastructureRoutingModule
  ],
  declarations: [CentralInventoryComponent, InfrastructureOutletComponent, InfrastructureComponent, InfrastuctureTimetableComponent],
  exports: [CentralInventoryComponent, InfrastructureOutletComponent, InfrastructureComponent, InfrastuctureTimetableComponent]
})
export class InfrastructureModule { }
