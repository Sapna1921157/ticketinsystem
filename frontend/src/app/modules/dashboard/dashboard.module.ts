import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashbordComponent } from './dashboard.component';
import { HeaderModule } from './header/header.module';
import { NcccSensorNodeComponent } from './nccc-sensor-node/nccc-sensor-node.component';



@NgModule({
  declarations: [
    DashbordComponent,
    ProjectsComponent,
    NcccSensorNodeComponent
   
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HeaderModule,
  ]
})
export class DashboardModule { }
