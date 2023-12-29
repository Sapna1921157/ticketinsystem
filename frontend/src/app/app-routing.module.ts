import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from 'src/auth.guard';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', redirectTo: "dashboard",
    pathMatch: "full"
  }, { path: 'recoverpassword/:{id} ', component: RecoverPasswordComponent },
  {
    path: "dashboard",
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  { path: 'signup', component: SignupComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }