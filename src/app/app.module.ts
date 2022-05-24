import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomePageNavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BusListDisplayPageComponent } from './bus-list-display-page/bus-list-display-page.component';
import { BusCardComponent } from './bus-card/bus-card.component';
import { SeatDisplayComponent } from './seat-display/seat-display.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddLocationFormComponent } from './add-location-form/add-location-form.component';
import { AddNewBusPageComponent } from './add-new-bus-page/add-new-bus-page.component';
import { ViewBusPageComponent } from './view-bus-page/view-bus-page.component';
import { BusNotFoundCardComponent } from './bus-not-found-card/bus-not-found-card.component';
import { MyTripsComponent } from './my-trips/my-trips.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { JwtModule } from '@auth0/angular-jwt';
import { TicketsNotFoundComponent } from './tickets-not-found/tickets-not-found.component';
import { InterceptorService } from './core/services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    SignUpPageComponent,
    LoginPageComponent,
    HomePageComponent,
    HomePageNavBarComponent,
    BusListDisplayPageComponent,
    BusCardComponent,
    SeatDisplayComponent,
    ConfirmBookingComponent,
    BusNotFoundCardComponent,
    MyTripsComponent,
    AdminDashboardComponent,
    ProfilePageComponent,
    TicketsNotFoundComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],

  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent]
})

export class AppModule { }
