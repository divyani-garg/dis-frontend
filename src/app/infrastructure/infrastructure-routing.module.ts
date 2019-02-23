import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { InfrastuctureTimetableComponent } from './infrastucture-timetable/infrastucture-timetable.component';
import { CentralInventoryComponent } from './central-inventory/central-inventory.component';

const routes: Routes = [
  {
    path: '',
    component: InfrastructureComponent
  },
  {
    path: 'timetable',
    component: InfrastuctureTimetableComponent
  },
  {
    path: 'Cinventory',
    component: CentralInventoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfrastructureRoutingModule { }
