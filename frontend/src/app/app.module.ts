import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { environment } from 'src/environments/environment';
import { AuthInterceptor,DEFAULT_TIMEOUT } from './auth/auth.interceptor';
import { MaterialModule } from './common/material.nodule';
import { ToastrModule, ToastrService } from 'ngx-toastr';


import {
  RECAPTCHA_SETTINGS,
  RecaptchaModule,
  RecaptchaSettings,
} from 'ng-recaptcha';
import { RouterModule, Routes } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';



//import { MatErrorMo } from '@angular/material/input';//

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgetPasswordComponent,
    RecoverPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
RecaptchaModule,
MaterialModule,
HttpClientModule,
FormsModule, 
MaterialModule,
CommonModule,

     RouterModule,
     ToastrModule,
  ],

  
  schemas:[NO_ERRORS_SCHEMA], 
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
      
    },
    [{ provide: DEFAULT_TIMEOUT, useValue: 100000 }],

    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptchasiteKey,
      } as RecaptchaSettings,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
