import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MydutiesRoutingModule } from './myduties-routing.module';
import { MydutiesComponent } from './myduties/myduties.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ExpertlectureComponent } from './expertlecture/expertlecture.component';
import { ProfileComponent } from './profile/profile.component';
import { WorkshopandconferenceComponent } from './workshopandconference/workshopandconference.component';
import { TaskslistComponent } from './taskslist/taskslist.component';
import { MarkattendanceComponent } from './markattendance/markattendance.component';
import { ClassTTComponent } from './class-tt/class-tt.component';
import { MidtermTTComponent } from './midterm-tt/midterm-tt.component';
import { QuizTTComponent } from './quiz-tt/quiz-tt.component';
import { PanelComponent } from './panel/panel.component';
import { PracticalTTComponent } from './practical-tt/practical-tt.component';
import { ProjectguideallotmentComponent } from './projectguideallotment/projectguideallotment.component';
import { IndustrialvisitComponent } from './industrialvisit/industrialvisit.component';
import { LibrarymanagementComponent } from './librarymanagement/librarymanagement.component';
import { ComputerclubmanagementComponent } from './computerclubmanagement/computerclubmanagement.component';
import { MagazinemanagementComponent } from './magazinemanagement/magazinemanagement.component';

@NgModule({
  imports: [
    CommonModule,
    MydutiesRoutingModule,

  ],
  declarations: [MydutiesComponent, NavigationComponent, ExpertlectureComponent, ProfileComponent,
    // tslint:disable-next-line:max-line-length
    WorkshopandconferenceComponent, TaskslistComponent, MarkattendanceComponent, ClassTTComponent, MidtermTTComponent, QuizTTComponent, PanelComponent, PracticalTTComponent, ProjectguideallotmentComponent, IndustrialvisitComponent, LibrarymanagementComponent, ComputerclubmanagementComponent, MagazinemanagementComponent]
})
export class MydutiesModule { }
