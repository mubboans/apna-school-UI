import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
changePasswordGroup:FormGroup
passwordmatch:boolean=false;
  constructor(public fb:FormBuilder) { 
    this.changePasswordGroup= fb.group({
      password:fb.control('',Validators.required),
      confirmpassword:fb.control('',Validators.required),
    })
    this.changePasswordGroup.valueChanges.subscribe((x)=>{
      let val1 =this.changePasswordGroup.get('password').value;
      let val2 = this.changePasswordGroup.get('confirmpassword').value;
      if(val1 && val2){
        if(val1 == val2){
          this.passwordmatch=true;
        }else{
          this.passwordmatch=false;
        }
      }
    })
  }

  ngOnInit(): void {
    console.log(this.formControl,'this.formControl')
  }

  // onPasswordChange(val1,val2) {
  //   console.log(val1,val2,'both value checked in onPasswordChange');
  //   if(this.changePasswordGroup.get('password').value && this.changePasswordGroup.get('confirmpassword').value){
  //   if (this.changePasswordGroup.get('password').value == this.changePasswordGroup.get('confirmpassword').value) {
  //     this.passwordmatch=true;
  //     console.log('password match');
      
  //   } else {
  //     console.log('password not match');
  //     this.passwordmatch=false;
  //   }
  // }
  // }
  get formControl(){
    return this.changePasswordGroup.controls;
  }

  changePassword(){

  }
}
