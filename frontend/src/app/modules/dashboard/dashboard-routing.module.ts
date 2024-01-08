import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashboard.component';
import { LoginComponent } from 'src/app/login/login.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { ProjectsComponent } from './projects/projects.component';
import { AddNewProjectComponent } from './add-new-project/add-new-project.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = 
[
  
  { 
    path: '', component:DashbordComponent, 
  },
 
   {
    path :'projects', component: ProjectsComponent
   },

  
   {
    path :'add-new-project', component: AddNewProjectComponent

   },
  {
    path:'usermanagement', component: UsermanagementComponent
  },
  {
    path:'users', component: UsersComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
