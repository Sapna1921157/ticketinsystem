import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashboard.component';
import { LoginComponent } from 'src/app/login/login.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { ProjectsComponent } from './projects/projects.component';
import { AdministrationComponent } from './administration/administration.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  
  { 
    path: '', component:DashbordComponent, 
  },
 
   {
    path :'projects', component: ProjectsComponent
   },

  {
    path:'usermanagement', component: UsermanagementComponent
  },

  {
    path: 'Administration', component:AdministrationComponent
  },
 
  {
    path: 'project', component: ProjectComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
