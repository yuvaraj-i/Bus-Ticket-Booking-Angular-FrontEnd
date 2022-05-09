import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusListDisplayPageComponent } from './bus-list-display-page/bus-list-display-page.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { BusService } from './core/services/bus.service';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SeatDisplayComponent } from './seat-display/seat-display.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

const routes: Routes = [
  // { path: "login", loadChildren: () => import('./login-page/login-page.module').then(m => m.LoginPageModule) },
  { path: "signup", component: SignUpPageComponent },
  { path: "", component: HomePageComponent},
  { path: "search/bus", component: BusListDisplayPageComponent },
  { path: "search/bus/seats", component: SeatDisplayComponent},
  { path: "bus/booking", component: ConfirmBookingComponent},
  { path: "login", component: LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [BusService]
})

export class AppRoutingModule { }
