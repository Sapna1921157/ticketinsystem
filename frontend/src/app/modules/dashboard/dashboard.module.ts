import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashbordComponent } from './dashboard.component';
import { HeaderModule } from './header/header.module';
import { NcccSensorNodeComponent } from './nccc-sensor-node/nccc-sensor-node.component';
import { AddNewProjectComponent } from './add-new-project/add-new-project.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashbordComponent,
    ProjectsComponent,
    NcccSensorNodeComponent,
    AddNewProjectComponent,
   
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { 

}
