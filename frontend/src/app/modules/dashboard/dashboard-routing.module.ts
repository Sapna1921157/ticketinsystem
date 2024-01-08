import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashboard.component';
import { LoginComponent } from 'src/app/login/login.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { ProjectsComponent } from './projects/projects.component';
<<<<<<< HEAD
import { AddNewProjectComponent } from './add-new-project/add-new-project.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersComponent } from './users/users.component';
=======
import { AdministrationComponent } from './administration/administration.component';
import { ProjectComponent } from './project/project.component';
>>>>>>> adb47d1c19e43d7bd04954d3c7d13f811a60faae


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
<<<<<<< HEAD
  {
    path:'users', component: UsersComponent
  },
  
=======

  {
    path: 'Administration', component:AdministrationComponent
  },
 
  {
    path: 'project', component: ProjectComponent
  }
>>>>>>> adb47d1c19e43d7bd04954d3c7d13f811a60faae
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
