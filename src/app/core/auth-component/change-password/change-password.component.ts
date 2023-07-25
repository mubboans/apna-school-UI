import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
changePasswordGroup:FormGroup
passwordmatch:boolean=false;
  constructor(public fb:FormBuilder,public authService:AuthService,private messageService: MessageService) { 
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
  ChangePassword(){
    console.log(this.changePasswordGroup.value);
    this.authService.fnChangePassword(this.changePasswordGroup.value).subscribe((x:any)=>{
      this.messageService.add({severity:'success', summary:x.message, detail:x.status,life:2000});
    },(err)=>{

    })
  }
  ngOnInit(): void {
    this.messageService.add({severity:'success', summary:"x.message", detail:"x.status",life:2000});
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
