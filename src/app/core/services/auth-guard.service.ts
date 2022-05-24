import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService {
  private jwtHelper = new JwtHelperService();

  constructor(private cookieService: CookieService) {
  }


  isUserLogedIn() {
    let accessToken = JSON.parse(localStorage.getItem("Authorization") || "{}").accessToken;

    let payLoad = this.jwtHelper.decodeToken(accessToken);

    if (payLoad != null && payLoad.mobile_number != "") {
      return true;
    }

    return false;
  }

  clearCookies() {
    this.cookieService.deleteAll();
  }

}
