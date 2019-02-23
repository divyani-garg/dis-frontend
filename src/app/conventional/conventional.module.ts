import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConventionalRoutingModule } from './conventional-routing.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    ConventionalRoutingModule
  ],
  declarations: [ProfileComponent],
  exports:[ProfileComponent]
})
export class ConventionalModule { }
