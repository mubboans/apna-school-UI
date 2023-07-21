import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './core/auth-component/register/register.component';
import { LoginComponent } from './core/auth-component/login/login.component';
import { NotfoundpageComponent } from './shared/notfoundpage/notfoundpage.component';
import { ForgotPasswordComponent } from './core/auth-component/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './core/auth-component/change-password/change-password.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'not-found',component:NotfoundpageComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'change-password',component:ChangePasswordComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'**',pathMatch:'full',redirectTo:'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
