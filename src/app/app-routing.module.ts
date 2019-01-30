import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './User_Authentication/login/login.component';
import { SignUpComponent } from './User_Authentication/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './User_Authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './User_Authentication/reset-password/reset-password.component';
import { StudentRoutingModule } from './student/student-routing.module';
import { HodRoutingModule } from './hod/hod-routing.module';


const routes: Routes = [
  { path: 'forgot-password',
     component: ForgotPasswordComponent
  },
  { path: 'reset-password',
     component: ResetPasswordComponent
  },
  { path: 'signup',
     component: SignUpComponent
  },
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HodRoutingModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
