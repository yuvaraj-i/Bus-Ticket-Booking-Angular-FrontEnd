import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusListDisplayPageComponent } from './bus-list-display-page/bus-list-display-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

const routes: Routes = [
  { path: "", component: LoginPageComponent },
  { path: "signup", component: SignUpPageComponent },
  { path: "login", redirectTo: "" },
  {
    path: "home", component: HomePageComponent, 
    // children: [
    //   { 
    //     path: "search/bus", 
    //     loadChildren: () => import("./bus-list-display-page/bus-list-display-page.component").then(m => m.BusListDisplayPageComponent)
    //   },
    // ],
  },

  {
    path: "search/bus", //loadChildren: () => import("./bus-list-display-page/bus-list-display-page.component").then(m => m.BusListDisplayPageComponent)
    component: BusListDisplayPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
