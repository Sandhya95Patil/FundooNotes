import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './component/registration/registration.component';
import { LoginComponent } from './component/login/login.component';
import { ForgetComponent } from './component/forget/forget.component';
import { ResetComponent } from './component/reset/reset.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NotesComponent } from './component/notes/notes.component';
import { UpdateComponent } from './component/update/update.component';
import { SearchnoteComponent } from './component/searchnote/searchnote.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  }
  ,
  {path:'register',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'forget',component:ForgetComponent},
  {path:'resetpassword/:token',component:ResetComponent},
  
  {path:'dashboard',component:DashboardComponent,
  children:[
    {
      path:'',
      redirectTo:'notes',
      pathMatch:'full'
    },
    {path:'notes',component:NotesComponent} ,
    {path:'update',component:UpdateComponent},
   {path:'reminder',component:NotesComponent},
   {path:'search',component:SearchnoteComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
