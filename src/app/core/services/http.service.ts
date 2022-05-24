import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { catchError, retry } from 'rxjs';
import { BusesDetails } from '../AllBuses/BusesDetails';
import { BookingTicket } from '../BookingTicket/BookingTicket';
import { LocationResponse } from '../Location/LocationResponse';
import { SeatData } from '../SeatsResponse/SeatsResponse';
import { User } from '../User/User';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  private rootUrl: string = "http://localhost:8080";

  constructor(private http: HttpClient, private cookieService:CookieService, private router:Router) { }

  loginUserRequest(requestBody: JSON) {
    return this.http.post<any>(this.rootUrl + "/auth/login", requestBody)

  }

  signupUserRequest(userDetails: any) {
    return this.http.post(this.rootUrl + "/auth/signup", userDetails, { responseType: 'text' })
  }

  getAllLocataionRequest() {
    return this.http.get<LocationResponse>(this.rootUrl + "/bus/locations");
  }


  getRequestToSeachBusesByLocations(busDetails: any) {
    let boarding = busDetails.from;
    let destination = busDetails.to;

    return this.http.get<BusesDetails>(this.rootUrl + "/bus/search?from=" + boarding + "&to=" + destination);

  }

  getBusSeatsAvaliablity(busId: number) {
    return this.http.get<SeatData>(this.rootUrl + "/bus/seats/" + busId);
  }

  postRequestToBookTicket(busId: string, requestBody: BookingTicket) {
    return this.http.post(this.rootUrl + "/booking/bus/ticket/" + busId, requestBody, { responseType: 'text' });
  }


  getRequestUserBooking(userId: string) {
    return this.http.get(this.rootUrl + "/booking/" + userId);
  }


  getRequestSignout() {
    return this.http.get(this.rootUrl + "/auth/signout", { responseType: 'text' });
  }

  getRequestUserDetails() {
    return this.http.get<User>(this.rootUrl + "/user/details");
  }


  getRequestToBus(busId: number) {
    return this.http.get(this.rootUrl + "/bus/" + busId)
  }


  getRequestAllUsers() {
    return this.http.get<Array<any>>(this.rootUrl + "/admin/all");
  }


  putRequestAddLocations(locationValues: string[]) {
    console.log(locationValues);

    return this.http.put(this.rootUrl + "/admin/add/locations", locationValues, { responseType: 'text' })
  }


  getAllBuses() {
    return this.http.get<Array<any>>(this.rootUrl + "/admin/bus/all");
  }


  postNewBusDetails(busResponseBody: NgForm[]) {
    return this.http.post(this.rootUrl + "/admin/add/bus", busResponseBody)
  }

  getAllTicketBooking() {
    return this.http.get<Array<Object>>(this.rootUrl + "/booking/details")
  }

  deleteRequestLocation(location: string) {
    return this.http.delete(this.rootUrl + "/admin/delete/location/" + location);
  }


  deleteRequestBus(busRegisterNumber: string) {
    return this.http.delete(this.rootUrl + "/admin/delete/bus/" + busRegisterNumber, { responseType: 'text' });
  }


  deleteRequestUser(mobileNumber: string) {
    return this.http.delete(this.rootUrl + "/admin/delete/user/" + mobileNumber, { responseType: 'text' });
  }


  sendLogout() {
    this.cookieService.deleteAll();
    localStorage.clear();
    this.router.navigate(["/login"]);
  }

}
