import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HodInfrastructureComponent } from './hod-infrastructure/hod-infrastructure.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { HodComponent } from '../hod/hod.component';
import { InfrastructureTimeTableComponent } from './infrastructure-time-table/infrastructure-time-table.component';
import { CentralInventoryComponent } from './central-inventory/central-inventory.component';

const routes: Routes = [
  { path: 'hod',
    component: HodComponent,
    children: [
      {
        path: 'infrastructure',
        component: HodInfrastructureComponent,
        children: [
          {
            path: '',
            component: InfrastructureComponent
          },
          {
            path: 'timetable',
            component: InfrastructureTimeTableComponent
          },
          {
            path: 'Cinventory',
            component: CentralInventoryComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HodInfrastuctureRoutingModule { }
