import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})

export class InterceptorService implements HttpInterceptor {
  private jwtHelper = new JwtHelperService();


  constructor(private cookieService: CookieService, private httpService: HttpService) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token = JSON.parse(localStorage.getItem("Authorization") || "{}").accessToken;
    let exprie = this.jwtHelper.isTokenExpired(token);
    console.log(exprie);
    

    if (token) {      
      const tokenizedReq = req.clone({ headers: req.headers.set('Authorization_1', 'Bearer ' + token) });
      return next.handle(tokenizedReq);
    }

    return next.handle(req);
  }

}
