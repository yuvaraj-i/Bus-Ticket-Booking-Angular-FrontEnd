import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpNavBarComponent } from './sign-up-nav-bar/sign-up-nav-bar.component';
import { LoginBtnComponent } from './login-btn/login-btn.component';
import { ContactBtnComponent } from './contact-btn/contact-btn.component';
import { SignUpBtnComponent } from './sign-up-btn/sign-up-btn.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { LoginNavBarComponent } from './login-nav-bar/login-nav-bar.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeBtnComponent } from './home-btn/home-btn.component';
import { SearchLocationFormComponent } from './search-location-form/search-location-form.component';



@NgModule({
  declarations: [
    SignUpNavBarComponent,
    LoginBtnComponent,
    ContactBtnComponent,
    SignUpBtnComponent,
    LoginFormComponent,
    LoginNavBarComponent,
    SignUpFormComponent,
    HomeBtnComponent,
    SearchLocationFormComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],

  exports:[
    SignUpNavBarComponent,
    LoginFormComponent,
    LoginNavBarComponent,
    SignUpBtnComponent,
    SignUpFormComponent,
    HomeBtnComponent,
    SearchLocationFormComponent
  ]

})
export class SharedModule { }
