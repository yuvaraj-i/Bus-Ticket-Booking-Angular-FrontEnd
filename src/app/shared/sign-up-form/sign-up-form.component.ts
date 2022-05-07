import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {

  constructor() { }

  displayFormDetails(SignUpForm:NgForm){
    console.log(SignUpForm.value);


    // loginDetails.resetForm();
    // this.setErrorStatus(false, false);
  }

  setErrorStatus(arg0: boolean, arg1: boolean) {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
