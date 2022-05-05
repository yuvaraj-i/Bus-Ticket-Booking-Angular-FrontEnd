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
  }

  ngOnInit(): void {
  }

}
