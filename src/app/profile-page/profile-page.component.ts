import { Component, OnInit } from '@angular/core';
import { HttpService } from '../core/services/http.service';
import { User } from '../core/User/User';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  userName!:string;
  dateOfBirth!:Date;
  age!:number;
  mobileNumber!:string;
  email!:string;
  
  constructor(private httpService:HttpService) { }

  ngOnInit(): void {

    this.httpService.getRequestUserDetails().subscribe({
      next: (response) => {
        let user:User = response;
        this.userName = user.name;
        this.dateOfBirth = user.dateOfBirth;
        this.age = user.age;
        this.mobileNumber = user.mobileNumber;
        this.email = user.emailAddress;

      },

      error:(error) => {
        if(error.status == 403) {
          this.httpService.sendLogout();
        }
      }
    })
  }

}
