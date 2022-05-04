import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginBtnComponent } from './login-btn/login-btn.component';
import { ContactBtnComponent } from './contact-btn/contact-btn.component';
import { SignUpBtnComponent } from './sign-up-btn/sign-up-btn.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavBarComponent,
    LoginBtnComponent,
    ContactBtnComponent,
    SignUpBtnComponent,
    LoginFormComponent
  ],

  imports: [
    CommonModule,
    FormsModule
  ],

  exports:[
    NavBarComponent,
    LoginFormComponent
  ]

})
export class SharedModule { }
