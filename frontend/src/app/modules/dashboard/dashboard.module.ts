import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
<<<<<<< HEAD
import { AddNewProjectComponent } from './add-new-project/add-new-project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';

=======
import { AdministrationComponent } from './administration/administration.component';
import { ProjectComponent } from './project/project.component';
>>>>>>> adb47d1c19e43d7bd04954d3c7d13f811a60faae


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
    
<<<<<<< HEAD
    // ProjectsComponent,
    NcccSensorNodeComponent,
          UsersComponent,
=======
    
    NcccSensorNodeComponent,
    AdministrationComponent,
    ProjectComponent
>>>>>>> adb47d1c19e43d7bd04954d3c7d13f811a60faae
   
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

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class DashboardModule { 

}
