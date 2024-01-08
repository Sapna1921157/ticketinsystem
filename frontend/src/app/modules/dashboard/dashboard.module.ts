import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashbordComponent } from './dashboard.component';
// import { HeaderModule } from './header/header.module';
import { MapComponent } from './map/map.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from 'src/app/footer/footer.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NcccSensorNodeComponent } from './nccc-sensor-node/nccc-sensor-node.component';
import { AddNewProjectComponent } from './add-new-project/add-new-project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    DashbordComponent,
    MapComponent,
    AddUserComponent,
    ProjectsComponent,
    NcccSensorNodeComponent,
    AddNewProjectComponent,
    
    // FooterComponent
    
    // ProjectsComponent,
    NcccSensorNodeComponent
   
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    // HeaderModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
        ReactiveFormsModule

  ]
})
export class DashboardModule { 

}
