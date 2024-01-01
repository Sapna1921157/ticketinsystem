import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashboard.component';
import { LoginComponent } from 'src/app/login/login.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';

const routes: Routes = [
  
  { 
    path: 'dashboard', component:DashbordComponent, 
  },
  { 
    path: 'users', component:UsermanagementComponent, 
  },
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
