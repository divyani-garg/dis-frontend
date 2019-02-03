import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HodInfrastuctureRoutingModule } from './hod-infrastucture-routing.module';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { HodInfrastructureComponent } from './hod-infrastructure/hod-infrastructure.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { InfrastructureTimeTableComponent } from './infrastructure-time-table/infrastructure-time-table.component';
import { CentralInventoryComponent } from './central-inventory/central-inventory.component';


@NgModule({
  imports: [
    CommonModule,
    HodInfrastuctureRoutingModule
  ],
  declarations: [
    InfrastructureComponent,
    HodInfrastructureComponent,
    InfrastructureTimeTableComponent,
    InfrastructureTimeTableComponent,
    CentralInventoryComponent
  ],
  providers:[NavigationComponent],
  exports: [InfrastructureComponent,
    HodInfrastructureComponent,
    InfrastructureTimeTableComponent,
    InfrastructureTimeTableComponent,
    CentralInventoryComponent]
})
export class HodInfrastuctureModule { }
