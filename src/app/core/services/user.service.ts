import { Injectable } from '@angular/core';
import { User } from '../User/User';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpServices: HttpService) { }


  // getUserDetails() {
  //   // const user: User = {
  //   //   name: "Raj",
  //   //   email: "raj@gmail.com",
  //   //   mobileNumber: "9876543210",
  //   //   age: 20,
  //   //   dateOfBirth: new Date(2022, 1, 12)
  //   // }


  //   return user;
  // }
}
