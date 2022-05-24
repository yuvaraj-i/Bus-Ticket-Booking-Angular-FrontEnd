import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuardService } from 'src/app/core/services/auth-guard.service';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  mobileErrorStatus: Boolean = false;
  passwordErrorStatus: Boolean = false;
  responseError!: string;

  constructor(private httpService: HttpService, private router: Router, private authService: AuthGuardService, private cookieService: CookieService) { }

  setErrorStatus(mobile: Boolean, password: Boolean) {
    this.mobileErrorStatus = mobile;
    this.passwordErrorStatus = password;

  }

  submitFormDetails(loginDetails: NgForm) {
    if (loginDetails.invalid) {
      this.setErrorStatus(true, true);
      return
    }

    loginDetails.value.mobileNumber = loginDetails.value.mobileNumber.trim();

    this.setErrorStatus(false, false);

    const response$ = this.httpService.loginUserRequest(loginDetails.value);

    response$.subscribe({
      next: (data) => {
        localStorage.setItem("Authorization", JSON.stringify(data));
                
        loginDetails.resetForm();
        this.router.navigate([""]);

      },
      error: (error) => {
        this.responseError = error.error;

        if(error.status == 403) {
          this.httpService.sendLogout();
        }

        setTimeout(() => {
          this.responseError = "";
        }, 4000);
      }

    });

  }

  ngOnInit(): void {

  }

}

