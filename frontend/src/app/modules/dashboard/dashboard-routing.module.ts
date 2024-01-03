import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashboard.component';
import { LoginComponent } from 'src/app/login/login.component';
import { ProjectsComponent } from './projects/projects.component';
import { NcccSensorNodeComponent } from './nccc-sensor-node/nccc-sensor-node.component';


const routes: Routes = [
  
  { 
    path: '', component:DashbordComponent, 
  },
   {
    path :'projects', component: ProjectsComponent
   },
   {
    path :'nccc-sensor-node', component: NcccSensorNodeComponent

   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
