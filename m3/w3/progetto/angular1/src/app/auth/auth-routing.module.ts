import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PersonalareaComponent } from './personalarea/personalarea.component';

const routes: Routes = [
  {path:'',
  component: AuthComponent,
  children: [
    {
      path:'',
      component: LoginComponent
    },
    {
      path:'register',
      component: RegisterComponent
    },
    {
      path:'personalarea',
      component: PersonalareaComponent
    },
  ]
},
 {
    path:'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
