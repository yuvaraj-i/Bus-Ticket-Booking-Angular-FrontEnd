import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  mobileErrorStatus:Boolean = false;
  passwordErrorStatus:Boolean = false;

  constructor() { }

  submitFormDetails(loginDetails:NgForm){
    if(loginDetails.valid){
      console.log(loginDetails.value);
      loginDetails.value.mobileNumber = loginDetails.value.mobileNumber.trim();
      console.log(loginDetails.value);
    }

    else{
      this.mobileErrorStatus = true;
      this.passwordErrorStatus = true;
    }
  }
  
  ngOnInit(): void {
  }

}
