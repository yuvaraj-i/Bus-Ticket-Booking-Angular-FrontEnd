import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomePageNavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { BusListDisplayPageComponent } from './bus-list-display-page/bus-list-display-page.component';
import { BusCardComponent } from './bus-card/bus-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignUpPageComponent,
    HomePageComponent,
    HomePageNavBarComponent,
    BusListDisplayPageComponent,
    BusCardComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
