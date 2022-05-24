import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

export class RoleService {
  private jwtHelper = new JwtHelperService();

  constructor(private cookieService: CookieService) { }


  isUserAdmin() {
    let accessToken = JSON.parse(localStorage.getItem("Authorization") || "{}").accessToken;

    let payLoad = this.jwtHelper.decodeToken(accessToken);

    if (payLoad != null) {
      let roles: string[] = payLoad.roles;

      if (roles.includes("admin")) {
        return true;
      }
    }


    return false;
  }
}
