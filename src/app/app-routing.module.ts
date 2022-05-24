import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLocationFormComponent } from './add-location-form/add-location-form.component';
import { AddNewBusPageComponent } from './add-new-bus-page/add-new-bus-page.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BusListDisplayPageComponent } from './bus-list-display-page/bus-list-display-page.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';
import { BusService } from './core/services/bus.service';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MyTripsComponent } from './my-trips/my-trips.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SeatDisplayComponent } from './seat-display/seat-display.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

const routes: Routes = [
  { path: "signup", component: SignUpPageComponent },
  { path: "", component: HomePageComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginPageComponent },
  { path: "search/bus", component: BusListDisplayPageComponent, canActivate: [AuthGuard] },
  { path: "search/bus/seats/:id", component: SeatDisplayComponent, canActivate: [AuthGuard] },
  { path: "bus/booking/:id", component: ConfirmBookingComponent, canActivate: [AuthGuard] },
  { path: "add/locations", component: AddLocationFormComponent, canActivate: [AuthGuard] },
  { path: "bus/add", component: AddNewBusPageComponent, canActivate: [AuthGuard] },
  { path: "my-trips", component: MyTripsComponent, canActivate: [AuthGuard] },
  { path: "profile", component:ProfilePageComponent, canActivate: [AuthGuard]},
  {
    path: "dashboard", component: AdminDashboardComponent, canActivate: [AuthGuard, RoleGuard], children: [
      { path: 'users', loadChildren: () => import('./users-list-page/user-list-page.module').then(m => m.UserListPageModule) },
      { path: 'locations', loadChildren: () => import('./location-view-page/location-view-page.module').then(m => m.LocationViewPageModule) },
      { path: 'add/locations', loadChildren: () => import('./add-location-form/add-location-form.module').then(m => m.AddLocationFormModule) },
      { path: 'bus/view', loadChildren: () => import('./view-bus-page/view-bus-page.module').then(m => m.ViewBusPageModule) },
      { path: 'bus/add', loadChildren: () => import('./add-new-bus-page/add-new-bus-page.module').then(m => m.AddNewBusPageModule) },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [BusService]
})

export class AppRoutingModule { }
