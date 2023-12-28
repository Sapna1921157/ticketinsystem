import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderModule } from './header/header.module';
// import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from 'src/app/footer/footer.component';


@NgModule({
  declarations: [
    DashboardComponent,
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
