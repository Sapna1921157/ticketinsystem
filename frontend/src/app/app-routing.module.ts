import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component'; 
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
const routes: Routes = [
  { path: '', redirectTo: "login", 
  pathMatch: "full"
},
{ path:'signup', component: SignupComponent },
{
  path:'login', component: LoginComponent
},

{  path: 'forget-password', component:ForgetPasswordComponent},

{path: 'recover-password', component:RecoverPasswordComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
