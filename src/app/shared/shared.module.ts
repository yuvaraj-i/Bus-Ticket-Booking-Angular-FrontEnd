import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './sign-up-nav-bar/nav-bar.component';
import { LoginBtnComponent } from './login-btn/login-btn.component';
import { ContactBtnComponent } from './contact-btn/contact-btn.component';
import { SignUpBtnComponent } from './sign-up-btn/sign-up-btn.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { LoginNavBarComponent } from './login-nav-bar/login-nav-bar.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    NavBarComponent,
    LoginBtnComponent,
    ContactBtnComponent,
    SignUpBtnComponent,
    LoginFormComponent,
    LoginNavBarComponent,
    SignUpFormComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],

  exports:[
    NavBarComponent,
    LoginFormComponent,
    LoginNavBarComponent,
    SignUpBtnComponent,
    SignUpFormComponent
  ]

})
export class SharedModule { }
