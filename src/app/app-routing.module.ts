import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './component/registration/registration.component';
import { LoginComponent } from './component/login/login.component';
import { ForgetComponent } from './component/forget/forget.component';
import { ResetComponent } from './component/reset/reset.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';



const routes: Routes = [
  {path:'',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'forget',component:ForgetComponent},
  {path:'resetpassword',component:ResetComponent},
  {path:'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
