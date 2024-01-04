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
import { ReactiveFormsModule } from '@angular/forms';
import { NcccSensorNodeComponent } from './nccc-sensor-node/nccc-sensor-node.component';
import { AdministrationComponent } from './administration/administration.component';



@NgModule({
  declarations: [
    HeaderComponent,
    DashbordComponent,
    MapComponent,
    AddUserComponent,
    ProjectsComponent,
    
    // FooterComponent
    
    // ProjectsComponent,
    NcccSensorNodeComponent,
          AdministrationComponent
   
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
    ReactiveFormsModule,
    

  ]
})
export class DashboardModule { }
