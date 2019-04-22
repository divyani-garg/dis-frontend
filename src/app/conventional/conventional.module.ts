import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConventionalRoutingModule } from './conventional-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ConventionalOutletComponent } from './conventional-outlet/conventional-outlet.component';

@NgModule({
  imports: [
    ConventionalRoutingModule,
    CommonModule
  ],
  declarations: [ProfileComponent, ConventionalOutletComponent],
  exports:[ProfileComponent]
})
export class ConventionalModule { }
