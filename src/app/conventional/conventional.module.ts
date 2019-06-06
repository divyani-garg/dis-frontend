import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConventionalRoutingModule } from './conventional-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ConventionalOutletComponent } from './conventional-outlet/conventional-outlet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ConventionalRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ProfileComponent, ConventionalOutletComponent],
  exports:[ProfileComponent]
})
export class ConventionalModule { }
