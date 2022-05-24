import { Component, OnInit } from '@angular/core';
import { HttpService } from '../core/services/http.service';

@Component({
  selector: 'app-users-list-page',
  templateUrl: './users-list-page.component.html',
  styleUrls: ['./users-list-page.component.scss']
})

export class UsersListPageComponent implements OnInit {

  usersList!:Array<any>;
  responseMessage!:string;

  constructor(private httpService:HttpService) { }

  deleteData(mobileNumber:string) {
    this.httpService.deleteRequestUser(mobileNumber).subscribe({
      next: (response) => {
        this.usersList = this.usersList.filter((userElement) => {
          return userElement.mobileNumber != mobileNumber;
        })
      },

      error:(error) => {

        this.responseMessage = error.error;

        if(error.status == 403) {
          this.httpService.sendLogout();
        }

        setTimeout(() => {
          this.responseMessage = "";
        }, 2000);
      }
    })
  }

  ngOnInit(): void {

    this.httpService.getRequestAllUsers().subscribe({
      next: (data) => {
        this.usersList = data;

        // console.log(data);
        
      },

      error: (error) => {
        console.log(error);
        
      }
      
    })

  }

}
