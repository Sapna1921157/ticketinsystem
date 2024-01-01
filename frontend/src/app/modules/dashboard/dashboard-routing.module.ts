import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashboard.component';
import { LoginComponent } from 'src/app/login/login.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { ProjectsComponent } from './projects/projects.component';
const routes: Routes = [
  
  { 
    path: 'dashboard', component:DashbordComponent, 
  },
  { 
    path: 'users', component:UsermanagementComponent, 
  },
   {
     path :'projects', component: ProjectsComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
