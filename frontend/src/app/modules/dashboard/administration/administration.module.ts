import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdministrationRoutingModule } from './administration-routing.module';
import { ProjectComponent } from './project/project.component';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProjectComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    HttpClientModule,
FormsModule, 
RouterModule,

  ]
})
export class AdministrationModule { }
