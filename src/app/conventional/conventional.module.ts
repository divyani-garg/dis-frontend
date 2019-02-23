import { NgModule } from '@angular/core';

import { ConventionalRoutingModule } from './conventional-routing.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    ConventionalRoutingModule
  ],
  declarations: [ProfileComponent],
  exports:[ProfileComponent]
})
export class ConventionalModule { }
