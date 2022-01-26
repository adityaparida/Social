import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-email-confirm',
  templateUrl: './email-confirm.component.html',
  styleUrls: ['./email-confirm.component.css']
})
export class EmailConfirmComponent implements OnInit {

  // otp!: string;
  // showOtp= true;

  // @ViewChild("ngOnInput", { static: false })
  // ngOnInput: any;
  // config = { allowNumbersOnly: true, length: 6, isPasswordInput: false, disableAutoFocus: false, placeholder: "*", inputStyles: { width: "10px", height: "10px" } }

  constructor() { }

  ngOnInit(): void {
  }
   // OTP Code 
   //onOtpChange(otp) { 
    // this.otp = otp; 
    // When all 4 digits are filled, trigger OTP validation method 
    // if (otp.length == 4) { this.validateOtp(); } } 
    // setVal(val) { this.ngOtpInput.setValue(val); } 
    //onConfigChange() { this.showOtpComponent = false; this.otp = null; setTimeout(() => { this.showOtpComponent = true; }, 0); }
    //  validateOtp() { // write your logic here to validate it, you can integrate sms API here if you want } 

  onInput() {

  }

}
