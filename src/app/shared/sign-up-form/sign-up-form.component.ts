import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { User } from 'src/app/core/User/User';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {

  constructor(private httpService: HttpService, private router: Router) { }

  displayFormDetails(SignUpForm: NgForm) {

    const data = {
      "name": SignUpForm.value.userName,
      "mobileNumber": SignUpForm.value.number,
      "emailAddress": SignUpForm.value.email,
      "dateOfBirth": SignUpForm.value.dateOfBirth,
      "password": SignUpForm.value.password
    }

    if (SignUpForm.valid) {
      this.httpService.signupUserRequest(data).subscribe({
        next: (response) => {
          SignUpForm.resetForm();
          this.router.navigate(["/login"])
        },
        // },

        error: (error) => {
          if (error.status == 403) {
            this.httpService.sendLogout();
          }
        }
      }
      )

    }

  }

  setErrorStatus(arg0: boolean, arg1: boolean) {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
