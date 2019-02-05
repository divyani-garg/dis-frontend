import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MydutiesRoutingModule } from './myduties-routing.module';
import { MydutiesComponent } from './myduties/myduties.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ExpertlectureComponent } from './expertlecture/expertlecture.component';
import { ProfileComponent } from './profile/profile.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  imports: [
    CommonModule,
    MydutiesRoutingModule,
  
  ],
  declarations: [MydutiesComponent, NavigationComponent, ExpertlectureComponent, ProfileComponent, TeamComponent]
})
export class MydutiesModule { }
