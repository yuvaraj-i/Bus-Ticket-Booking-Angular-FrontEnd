import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuardService } from 'src/app/core/services/auth-guard.service';
import { HttpService } from 'src/app/core/services/http.service';
import { RoleService } from 'src/app/core/services/role.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class HomePageNavBarComponent implements OnInit {

  roleStatus!: boolean;

  constructor(private httpService: HttpService, private router: Router, private authGuardService: AuthGuardService, private roleService: RoleService, private cookieService: CookieService) { }

  sendLogout() {
    this.cookieService.deleteAll();
    localStorage.clear();
    this.router.navigate(["/login"]);
  }


  adminDashboard() {
    this.router.navigate(["/dashboard/users"])

  }

  ngOnInit(): void {
    this.roleStatus = this.roleService.isUserAdmin();
  }

}
