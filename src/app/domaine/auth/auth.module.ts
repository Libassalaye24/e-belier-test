import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './view/login/login.component';
import { OptLoginComponent } from './components/opt-login/opt-login.component';
import { ConfirmOtpComponent } from './components/confirm-otp/confirm-otp.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from 'src/app/application/shared/shared.module';
import { CguComponent } from './components/cgu/cgu.component';



@NgModule({
  declarations: [
    LoginComponent,
    OptLoginComponent,
    ConfirmOtpComponent,
    CguComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
