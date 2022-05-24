import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-email-verify',
  templateUrl: './email-verify.component.html',
  styleUrls: ['./email-verify.component.scss']
})

export class EmailVerifyComponent implements OnInit {

  userEmail:string = "raj@gmail.com";
  emailDisable:boolean = true;
  verificationCode!:string; 
  status!:boolean;
  // @Output() sucessStatus = new EventEmitter<boolean>();
  
  constructor(private httpServices:HttpService) { }

  verifyCode(code:NgModel) {

    if(code.value == null) {
      return
    }

    if(code.value.length == 4) {
      this.emailDisable = false;
      this.verificationCode = code.value;
    }
  }

  resendCodeEmail() {
    console.log("email sent");
  }

  submitVerficationCode() {
    // this.httpServices.postRequestToVerify(this.verificationCode);
    // if()
    // this.sucessStatus.emit(true);
    this.status = true;
    console.log("submited");
    
  }

  ngOnInit(): void {
  }

}
