import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MydutiesComponent } from './myduties/myduties.component';

const routes: Routes = [
  {
    path:'',
    component: MydutiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MydutiesRoutingModule { }
