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

  setErrorStatus(mobile:Boolean, password:Boolean){
    this.mobileErrorStatus = mobile;
    this.passwordErrorStatus = password;
    
  }
  
  submitFormDetails(loginDetails:NgForm){
    if(loginDetails.invalid){
      this.setErrorStatus(true, true);
      return
    }
    
    loginDetails.value.mobileNumber = loginDetails.value.mobileNumber.trim();
    console.log(loginDetails.value);
    loginDetails.resetForm();
    this.setErrorStatus(false, false);

  }
  
  ngOnInit(): void {
  }

}
