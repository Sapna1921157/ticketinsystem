import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashbordComponent } from './dashboard.component';
import { HeaderModule } from './header/header.module';
import { MapComponent } from './map/map.component';
// import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from 'src/app/footer/footer.component';


@NgModule({
  declarations: [
    DashbordComponent,
    MapComponent
    // FooterComponent
    // HeaderComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HeaderModule,
  ]
})
export class DashboardModule { }
