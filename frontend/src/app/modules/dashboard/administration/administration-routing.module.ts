import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration.component';
import { ProjectComponent } from './project/project.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { 
    path: '', component:AdministrationComponent
  },

  {
    path: 'project', component:ProjectComponent
  },

  {
    path: 'users', component:UsersComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
