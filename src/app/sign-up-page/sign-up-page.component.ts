import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {

  constructor() { }

  signUpImage!:string; 

  ngOnInit(): void {

    this.signUpImage = "../../assets/undraw_location_tracking_re_n3ok.svg";
  }

}
